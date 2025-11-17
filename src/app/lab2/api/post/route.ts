import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { title, content } = await req.json();

    const post = await prisma.post.create({
      data: { title, content },
    });

    return NextResponse.json({ message: "Post created", post });
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
