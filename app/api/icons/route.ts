import { NextResponse } from "next/server";
import axios from "axios";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { userId } = auth();
  const iconUrl = await req.json();

  try {
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" });
    }

    const icons = await prismadb.pastIcons.createMany({
      data: iconUrl.map((iconUrl: string) => ({
        userId: userId as string,
        iconUrl,
      })),
    });

    return NextResponse.json({ icons });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" });
  }
}
export async function GET() {
  try {
    const icons = await prismadb.pastIcons.findMany({
      select: {
        id: true,
        userId: true,
        iconUrl: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ icons });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" });
  }
}
