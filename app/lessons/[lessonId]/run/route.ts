// app/lessons/[lessonId]/run/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { runUserCode } from "@/lib/codeRunner"; // We'll remove or comment out the real runner
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_API_KEY,
});

// Optional: force route to be dynamic so `params.lessonId` works
export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    const { code, language } = await request.json();

    // 1. Fetch the lesson from DB (so we can provide the problem statement or reference solution to GPT)
    const lesson = await prisma.lesson.findUnique({
      where: { id: params.lessonId },
      // If you store reference solutions or other fields, include them here
      // select: { content: true, referenceSolution: true, ... }
    });
    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }

    // 2. Build a prompt for GPT
    //    We'll pass the user's code, lesson content, and ask for analysis.
    //    Adjust the system & user messages to shape the response.

    const systemMessage = `
You are a coding mentor that:
1) Analyzes the user's code.
2) Identifies the time complexity.
3) Compares with an optimal approach (if relevant).
4) Congratulates or provides suggestions for improvement.
Avoid condescending tone; be concise and helpful.
    `;

    // Example: maybe we want GPT to see the lesson content as well:
    const userMessage = `
Lesson Title: ${lesson.title}
Lesson Content: ${lesson.content}

User's Code (Language: ${language}):
\`\`\`
${code}
\`\`\`

Analyze the code and provide:
- Time complexity
- Potential improvements or alternative solutions
- A short congratulatory note if the code seems correct
    `;

    // 3. Call OpenAI for analysis
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4" if you have access
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
      temperature: 0.7, // tweak if you want more/less creative responses
    });

    const analysis = gptResponse.choices[0].message?.content || "No analysis.";

    // 4. Return GPT's response as `output`
    return NextResponse.json({
      output: analysis,
    });
  } catch (error: any) {
    console.error("GPT Analysis Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}