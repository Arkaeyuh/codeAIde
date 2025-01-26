import { NextRequest, NextResponse } from "next/server";

// optional: force dynamic to ensure this is not statically optimized
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // 1. Parse query params
    const { searchParams } = new URL(req.url);
    const lessonId = searchParams.get("lessonId");
    const lang = searchParams.get("lang") || "python";

    // Basic validation
    if (!lessonId) {
      return NextResponse.json(
        { error: "Missing lessonId query param" },
        { status: 400 }
      );
    }

    // 2. Retrieve or generate skeleton code
    // In a real app, you might read from the filesystem or DB. 
    // For demonstration, we'll do a simple switch or dictionary:
    const skeletonMap: Record<string, string> = {
      python: `# Skeleton for Python\n\ndef solve():\n    pass\n`,
      java: `// Skeleton for Java\n\nclass Solution {\n    public void solve() {\n        \n    }\n}\n`,
    };

    const skeleton = skeletonMap[lang] || "// No skeleton available for this language.";

    // 3. Return skeleton as JSON
    return NextResponse.json({ skeleton }, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/skeletons GET:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}