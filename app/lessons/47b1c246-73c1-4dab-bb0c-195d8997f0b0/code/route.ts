// app/lessons/[lessonId]/code/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    // 1. Get the query param for language, default to "python"
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") ?? "python";

    // 2. Construct the path to your skeleton file on disk
    //    e.g., lessons/<lessonId>/skeletons/<lang>.py
    //    For python, that might be "python.py"
    //    We'll do a simple mapping here:
    const fileName =
      lang === "python"
        ? "python.py"
        : `${lang}.txt`; // or handle other languages as needed

    // The base directory might be relative to process.cwd(), or a known "lessons" directory:
    const skeletonPath = path.join(
      process.cwd(),
      "lessons",
      params.lessonId,
      "skeletons",
      fileName
    );

    // 3. Read the file
    let fileContent = "";
    try {
      fileContent = await fs.readFile(skeletonPath, "utf-8");
    } catch (err) {
      // If no file found, fallback to a default message
      fileContent = `# No skeleton found for language: ${lang} (lessonId: ${params.lessonId})`;
    }

    // 4. Return the skeleton in JSON
    return NextResponse.json({ skeleton: fileContent }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}