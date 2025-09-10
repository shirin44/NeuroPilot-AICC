import { GoogleGenAI, Type } from '@google/genai';
import type { GenerateContentResponse } from '@google/genai';
import type { StarFeedback } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

/**
 * Get interview feedback (STAR method).
 * Includes per-part scores, feedback, strengths, and a revised full answer.
 */
export const getInterviewFeedback = async (
  question: string,
  answer: string
): Promise<StarFeedback> => {
  try {
    const prompt = `
You are a supportive interview coach. Analyze the answer using STAR (Situation, Task, Action, Result).

QUESTION: "${question}"
CANDIDATE ANSWER: "${answer}"

Tone rules:
- Be specific, kind, and actionable. Use plain English.
- Prefer “Consider / Try …” over “You should …”.
- Avoid harsh phrases (“bad”, “wrong”); use “could be clearer”, “can strengthen by…”.

Output:
- For each STAR part: { score 1–5, feedback (2–4 sentences), strengths (2 short bullets) }.
- overall: { score 1–5, feedback (encouraging summary), strengths (2–4 bullets), revisedAnswer (5–7 sentences STAR rewrite), concise and not overwhelming suitable for an autistic person }.

Return JSON ONLY, no markdown.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            situation: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER },
                feedback: { type: Type.STRING },
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ['score', 'feedback']
            },
            task: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER },
                feedback: { type: Type.STRING },
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ['score', 'feedback']
            },
            action: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER },
                feedback: { type: Type.STRING },
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ['score', 'feedback']
            },
            result: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER },
                feedback: { type: Type.STRING },
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ['score', 'feedback']
            },
            overall: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER },
                feedback: { type: Type.STRING },
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
                revisedAnswer: { type: Type.STRING }
              },
              required: ['score', 'feedback', 'strengths', 'revisedAnswer']
            }
          },
          required: ['situation', 'task', 'action', 'result', 'overall']
        }
      }
    });

    const jsonString = response.text.trim();
    return JSON.parse(jsonString) as StarFeedback;
  } catch (error) {
    console.error('Error getting interview feedback:', error);
    throw new Error('Failed to get feedback from AI. Please try again.');
  }
};

/**
 * Get a concise improved example for a weak STAR component.
 */
export const getImprovementSuggestion = async (
  question: string,
  answer: string,
  componentToImprove: 'Situation' | 'Task' | 'Action' | 'Result'
): Promise<{ suggestion: string }> => {
  try {
    const prompt = `
An interview candidate was asked: "${question}"
Their answer was: "${answer}"

Their response for the "${componentToImprove}" part of the STAR method was weak.

Provide a concise, improved example for ONLY the "${componentToImprove}" part of their answer. 
Keep it to 1–2 sentences and directly related to their context.

Return JSON ONLY.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: {
              type: Type.STRING,
              description: `Improved example for the ${componentToImprove} section.`
            }
          },
          required: ['suggestion']
        }
      }
    });

    const jsonString = response.text.trim();
    return JSON.parse(jsonString);
  } catch (error) {
    console.error(
      `Error getting improvement suggestion for ${componentToImprove}:`,
      error
    );
    return {
      suggestion:
        'Could not generate a suggestion at this time. Please try again.'
    };
  }
};

/**
 * Clean an interview question for inclusivity and clarity.
 */
export const cleanInterviewQuestion = async (
  question: string
): Promise<{ cleanedQuestion: string; score: number; reasoning: string }> => {
  try {
    const prompt = `
Analyze this interview question for inclusivity, clarity, and anxiety triggers: "${question}"
Rewrite it to be more direct and unambiguous.
Provide:
- "cleanedQuestion" (the revised version),
- "score" (1–100 inclusivity score),
- "reasoning" (brief explanation).

Return JSON ONLY.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            cleanedQuestion: { type: Type.STRING },
            score: { type: Type.INTEGER },
            reasoning: { type: Type.STRING }
          },
          required: ['cleanedQuestion', 'score', 'reasoning']
        }
      }
    });

    const jsonString = response.text.trim();
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error cleaning interview question:', error);
    throw new Error('Failed to clean question with AI. Please try again.');
  }
};
