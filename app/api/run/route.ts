import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the body
    const { lessonId, code, language } = await req.json();

    // Basic validation
    if (!lessonId || !code || !language) {
      return NextResponse.json(
        { error: "Missing required fields (lessonId, code, language)" },
        { status: 400 }
      );
    }

    // 2. Here you'd typically run the code in a sandbox or 3rd-party:
    // e.g. let result = await runInSandbox(code, language);

    // For this demo, let's do a mock response:
    const result = `Mock runner: Code run successfully for lessonId=${lessonId} with language=${language}.`;

    // 3. Return the result
    return NextResponse.json({ output: result }, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/run POST:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}