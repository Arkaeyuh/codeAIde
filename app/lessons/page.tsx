import { prisma } from "@/lib/prisma"; // your prisma client
import Link from "next/link";
import React from 'react';

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
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-3xl font-bold mb-5">All Lessons</h2>
      <div className="w-full max-w-4xl">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <Link href={`/lessons/${lesson.id}`}>
              <div className="block">
                <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                <p className="text-sm text-gray-600">Difficulty: {lesson.difficulty}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}