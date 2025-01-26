import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; // or revalidate = 0

export async function GET(req: NextRequest) {
  // parse from /api/lessons/xxx
  const url = new URL(req.url);
  // e.g. "http://localhost:3000/api/lessons/96bac8d9"
  const segments = url.pathname.split("/");
  const lessonId = segments.at(-1); // last segment
  if (!lessonId) {
    return NextResponse.json({ error: "No ID found" }, { status: 400 });
  }

  try {
    const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
    if (!lesson) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(lesson);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}