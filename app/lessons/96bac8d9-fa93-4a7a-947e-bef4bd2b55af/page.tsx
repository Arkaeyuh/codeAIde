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

  // Fetch the lesson data (title, content, difficulty, etc.)
  useEffect(() => {
    async function fetchLesson() {
      const res = await fetch(`/api/lessons/${params.lessonId}`);
      const data = await res.json();
      setLesson(data);
    }
    fetchLesson();
  }, [params.lessonId]);

  // Fetch skeleton code (Python by default)
  useEffect(() => {
    async function fetchSkeleton() {
      const res = await fetch(`/lessons/${params.lessonId}/code?lang=${language}`);
      const data = await res.json();
      setCode(data.skeleton || "");
    }
    fetchSkeleton();
  }, [language, params.lessonId]);

  // Handle code submission to run/test
  async function handleSubmit() {
    setTestResult("Running...");
    const res = await fetch(`/lessons/${params.lessonId}/run`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, language }),
    });
    const data = await res.json();
    if (data.error) {
      setTestResult(`Error: ${data.error}`);
    } else {
      setTestResult(data.output || "No output received.");
    }
  }

  if (!lesson) {
    return <div>Loading lesson info...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Lesson title */}
      <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>

      {/* Difficulty (optional) */}
      <p className="text-gray-700 mb-2">
        <strong>Difficulty:</strong> {lesson.difficulty}
      </p>

      {/* The prompt/content of the coding problem */}
      <h2 className="text-xl font-semibold mb-2">Problem Prompt:</h2>
      <p className="mb-4 whitespace-pre-wrap">{lesson.content}</p>

      {/* Language selector */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Select Language:</label>
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

      {/* Code editor */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Your Code:</label>
        <textarea
          className="w-full h-40 border p-2 rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {/* Submission button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Run / Submit
      </button>

      {/* Test result panel */}
      {testResult && (
        <div className="mt-4 p-2 border rounded bg-gray-50">
          <h2 className="font-bold">Results:</h2>
          <p>{testResult}</p>
        </div>
      )}
    </div>
  );
}