
import { GoogleGenAI, Type } from '@google/genai';
import type { GenerateContentResponse } from '@google/genai';
import type { StarFeedback } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getInterviewFeedback = async (question: string, answer: string): Promise<StarFeedback> => {
  try {
    const prompt = `
      Analyze the following interview answer based on the STAR method (Situation, Task, Action, Result).
      The question was: "${question}"
      The user's answer is: "${answer}"

      Provide a score from 1 to 5 and constructive feedback for each STAR component and an overall assessment.
      Your response MUST be a JSON object that strictly follows this schema. Do not include any markdown formatting like \`\`\`json.
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
                score: { type: Type.INTEGER, description: "Score from 1 to 5 for Situation." },
                feedback: { type: Type.STRING, description: "Feedback for Situation." }
              }
            },
            task: { 
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "Score from 1 to 5 for Task." },
                feedback: { type: Type.STRING, description: "Feedback for Task." }
              }
            },
            action: { 
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "Score from 1 to 5 for Action." },
                feedback: { type: Type.STRING, description: "Feedback for Action." }
              }
            },
            result: { 
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "Score from 1 to 5 for Result." },
                feedback: { type: Type.STRING, description: "Feedback for Result." }
              }
            },
            overall: { 
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "Overall score from 1 to 5." },
                feedback: { type: Type.STRING, description: "Overall feedback and encouragement." }
              }
            }
          }
        }
      }
    });

    const jsonString = response.text.trim();
    return JSON.parse(jsonString) as StarFeedback;

  } catch (error) {
    console.error("Error getting interview feedback:", error);
    throw new Error("Failed to get feedback from AI. Please try again.");
  }
};

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
      
      Provide a concise, improved example for ONLY the "${componentToImprove}" part of their answer. This example should be 1-2 sentences and directly relate to the context of their answer, showing them a better way to phrase it.
      
      Your response MUST be a JSON object that strictly follows this schema. Do not include any markdown formatting.
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
              description: `An improved example for the ${componentToImprove} section.` 
            }
          },
          required: ['suggestion'],
        }
      }
    });

    const jsonString = response.text.trim();
    return JSON.parse(jsonString);

  } catch (error) {
    console.error(`Error getting improvement suggestion for ${componentToImprove}:`, error);
    // Return a graceful failure message to prevent UI crashing
    return { suggestion: "Could not generate a suggestion at this time. Please try again." };
  }
};


export const cleanInterviewQuestion = async (question: string): Promise<{ cleanedQuestion: string; score: number; reasoning: string }> => {
  try {
    const prompt = `
      Analyze the following interview question for inclusivity, clarity, and potential to cause anxiety for neurodivergent candidates: "${question}"
      Rewrite the question to be more direct, concrete, and unambiguous.
      Provide an "inclusivity score" from 1 to 100 for the NEW question.
      Provide a brief reasoning for your changes.
      Your response MUST be a JSON object that strictly follows this schema. Do not include any markdown formatting like \`\`\`json.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            cleanedQuestion: { type: Type.STRING, description: "The revised, more inclusive question." },
            score: { type: Type.INTEGER, description: "Inclusivity score from 1 to 100 for the new question." },
            reasoning: { type: Type.STRING, description: "A brief explanation of the changes made." }
          }
        }
      }
    });
    
    const jsonString = response.text.trim();
    return JSON.parse(jsonString);

  } catch (error) {
    console.error("Error cleaning interview question:", error);
    throw new Error("Failed to clean question with AI. Please try again.");
  }
};
