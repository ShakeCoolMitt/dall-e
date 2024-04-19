import { NextResponse } from "next/server";
import axios from "axios";
import { auth, useUser } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { userId } = auth();
  const iconUrl = await req.json();

  try {
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
export async function GET(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const oneDayAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);

  try {
    const icons = await prismadb.pastIcons.findMany({
      where: {
        userId: userId, // Ensure icons are fetched for the logged-in user
        createdAt: {
          gt: oneDayAgo, // Only icons created in the last 24 hours
        },
      },
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
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
