"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LessonDetail({ params }: { params: { lessonId: string } }) {
  // state for the lesson info
  const [lesson, setLesson] = useState<any>(null);

  // state for code editor
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("// Loading skeleton...");
  const [testResult, setTestResult] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchLesson() {
      const res = await fetch(`/api/lessons/${params.lessonId}`);
      const data = await res.json();
      setLesson(data);
    }
    fetchLesson();
  }, [params.lessonId]);

  // fetch skeleton code when the user changes language or first load
  useEffect(() => {
    async function fetchSkeleton() {
      const res = await fetch(`/lessons/${params.lessonId}/code?lang=${language}`);
      const data = await res.json();
      setCode(data.skeleton || "");
    }
    fetchSkeleton();
  }, [language, params.lessonId]);

  // handle code submission
  async function handleSubmit() {
    setTestResult("Analyzing code...");
    const res = await fetch(`/lessons/${params.lessonId}/run`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, language }),
    });
    const data = await res.json();
    setTestResult(data.output);
  }

  if (!lesson) {
    return <div>Loading lesson info...</div>;
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-black to-gray-900 text-black pt-10">
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-5 text-white">{lesson.title}</h1>
        <p className="text-gray-400 mb-4 whitespace-pre-wrap">{lesson.content}</p>

        <div className="mb-4">
          <label className="block mb-2 font-semibold text-white">Select Language:</label>
          <select
            className="border p-2 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="python">Python</option>
            <option value="java">Java</option>
            {/* add more languages if you have skeletons */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold text-white">Your Code:</label>
          <textarea
            className="w-full h-40 border p-2 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Run / Submit
        </button>

        {testResult && (
          <div className="mt-4 p-2 border rounded bg-gray-50">
            <h2 className="font-bold">Results:</h2>
            <p>{testResult}</p>
          </div>
        )}
      </div>
    </section>
  );
}