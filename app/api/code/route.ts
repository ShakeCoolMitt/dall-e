import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a code generator. You must only respond in markdown code snippets. Use code comments for explanations.",
      },
    ],
    model: "gpt-3.5-turbo",
  });
}

export async function POST(req: Request) {
  const comp = await main();
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [comp, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
