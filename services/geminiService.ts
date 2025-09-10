// aiService.ts
import { GoogleGenerativeAI, SchemaType, type GenerateContentResult } from "@google/generative-ai";
import type { StarFeedback } from "../types";

// 1) Resolve API key from env
const API_KEY =
  process.env.GEMINI_API_KEY ||
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || // if you ever expose via browser (not recommended for secrets)
  process.env.API_KEY; // your original

if (!API_KEY) {
  // Fail fast with a clear message for local dev
  // (In production you might want to throw a generic error instead)
  console.warn("[AI] Missing GEMINI_API_KEY / API_KEY environment variable.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");

// 2) Get model helper (change the model name in one place)
const getModel = () =>
  genAI.getGenerativeModel({
    model: "gemini-2.5-flash", // or "gemini-1.5-flash" depending on your quota
  });

// 3) Generic JSON generator helper with schema + safe parsing
async function generateJSON<T>(
  prompt: string,
  schema: any // using SDK SchemaObject; can type-narrow if you want
): Promise<T> {
  const model = getModel();

  const result: GenerateContentResult = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = result.response?.text?.();
  if (!text) {
    throw new Error("Empty response from AI");
  }

  // Some models can still surround JSON with spaces/newlines
  const trimmed = text.trim();

  try {
    return JSON.parse(trimmed) as T;
  } catch (e) {
    // Useful for debugging bad responses
    console.error("[AI] JSON parse failed. Raw text:", trimmed);
    throw new Error("The AI returned invalid JSON.");
  }
}

// -------------------- API FUNCTIONS --------------------

export const getInterviewFeedback = async (question: string, answer: string): Promise<StarFeedback> => {
  try {
    const prompt = `
Analyze the following interview answer using the STAR method (Situation, Task, Action, Result).
Question: "${question}"
Answer: "${answer}"

Return ONLY a JSON object that matches the provided schema. No extra text.
`;

    const schema = {
      type: SchemaType.OBJECT,
      properties: {
        situation: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.INTEGER, description: "1 to 5" },
            feedback: { type: SchemaType.STRING },
          },
          required: ["score", "feedback"],
        },
        task: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.INTEGER, description: "1 to 5" },
            feedback: { type: SchemaType.STRING },
          },
          required: ["score", "feedback"],
        },
        action: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.INTEGER, description: "1 to 5" },
            feedback: { type: SchemaType.STRING },
          },
          required: ["score", "feedback"],
        },
        result: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.INTEGER, description: "1 to 5" },
            feedback: { type: SchemaType.STRING },
          },
          required: ["score", "feedback"],
        },
        overall: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.INTEGER, description: "1 to 5" },
            feedback: { type: SchemaType.STRING },
          },
          required: ["score", "feedback"],
        },
      },
      required: ["situation", "task", "action", "result", "overall"],
    };

    const data = await generateJSON<StarFeedback>(prompt, schema);
    return data;
  } catch (error) {
    console.error("Error getting interview feedback:", error);
    throw new Error("Failed to get feedback from AI. Please try again.");
  }
};

export const getImprovementSuggestion = async (
  question: string,
  answer: string,
  componentToImprove: "Situation" | "Task" | "Action" | "Result"
): Promise<{ suggestion: string }> => {
  try {
    const prompt = `
Question: "${question}"
Candidate's answer: "${answer}"

The "${componentToImprove}" part of the STAR answer was weak.
Provide a concise improved example for ONLY the "${componentToImprove}" (1–2 sentences),
directly related to the existing context. Return ONLY JSON.
`;

    const schema = {
      type: SchemaType.OBJECT,
      properties: {
        suggestion: {
          type: SchemaType.STRING,
          description: `An improved example for ${componentToImprove}.`,
        },
      },
      required: ["suggestion"],
    };

    return await generateJSON<{ suggestion: string }>(prompt, schema);
  } catch (error) {
    console.error(`Error getting improvement suggestion for ${componentToImprove}:`, error);
    // Graceful fallback so UI doesn’t crash
    return { suggestion: "Could not generate a suggestion at this time. Please try again." };
  }
};

export const cleanInterviewQuestion = async (
  question: string
): Promise<{ cleanedQuestion: string; score: number; reasoning: string }> => {
  try {
    const prompt = `
Analyze this interview question for inclusivity, clarity, and anxiety reduction for neurodivergent candidates:

Original: "${question}"

Rewrite it to be direct, concrete, and unambiguous.
Give an inclusivity score (1–100) for the NEW question.
Explain briefly what you changed and why.
Return ONLY JSON following the schema.
`;

    const schema = {
      type: SchemaType.OBJECT,
      properties: {
        cleanedQuestion: { type: SchemaType.STRING, description: "The revised, more inclusive question." },
        score: { type: SchemaType.INTEGER, description: "1–100" },
        reasoning: { type: SchemaType.STRING, description: "Brief explanation of the changes." },
      },
      required: ["cleanedQuestion", "score", "reasoning"],
    };

    return await generateJSON<{ cleanedQuestion: string; score: number; reasoning: string }>(prompt, schema);
  } catch (error) {
    console.error("Error cleaning interview question:", error);
    throw new Error("Failed to clean question with AI. Please try again.");
  }
};
