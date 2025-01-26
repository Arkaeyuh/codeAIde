import { prisma } from "@/lib/prisma"; // your prisma client
import Link from "next/link";

// This is a server component by default in Next.js 13+ (unless you say "use client")
export default async function LessonsPage() {
  // fetch all lessons from DB
  const lessons = await prisma.lesson.findMany({
    select: {
      id: true,
      title: true,
      difficulty: true,
      // any other fields
    },
  });

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">All Lessons</h1>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="p-4 border rounded hover:bg-gray-50">
            <Link href={`/lessons/${lesson.id}`}>
              <span className="font-semibold">{lesson.title}</span>{" "}
              <span className="text-sm text-gray-600">({lesson.difficulty})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}