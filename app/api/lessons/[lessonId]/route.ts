// app/api/lessons/[lessonId]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: { id: params.lessonId },
    });

    if (!lesson) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(lesson, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
