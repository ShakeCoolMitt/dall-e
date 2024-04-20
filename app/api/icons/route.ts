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

  try {
    const icons = await prismadb.pastIcons.findMany({
      where: {
        userId: userId, // Ensure icons are fetched for the logged-in user
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
export async function DELETE(req: Request) {
  // Authenticate the user and obtain the userId
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // Parse the request body to get the icon ID to be deleted
  const { iconId } = await req.json();
  if (!iconId) {
    return NextResponse.json(
      { message: "Icon ID is required" },
      { status: 400 }
    );
  }

  try {
    // Verify the icon belongs to the user
    const icon = await prismadb.pastIcons.findUnique({
      where: {
        id: iconId,
      },
    });

    if (!icon || icon.userId !== userId) {
      return NextResponse.json(
        { message: "Icon not found or access denied" },
        { status: 404 }
      );
    }

    // Proceed to delete the icon
    await prismadb.pastIcons.delete({
      where: {
        id: iconId,
      },
    });

    return NextResponse.json({ message: "Icon deleted successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
