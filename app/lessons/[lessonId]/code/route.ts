// app/lessons/[lessonId]/code/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { lessonId: string } }
) {
  // check query param for language
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "python";

  // fetch lesson from DB
  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId },
  });

  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  // pick the right skeleton
  let skeleton = "";
  if (lang === "python" && lesson.pythonSkeleton) {
    skeleton = lesson.pythonSkeleton;
  } else if (lang === "java" && lesson.javaSkeleton) {
    skeleton = lesson.javaSkeleton;
  } else {
    skeleton = "// Sorry, no skeleton available for this language.";
  }

  return NextResponse.json({ skeleton });
}
