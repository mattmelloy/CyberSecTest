import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are a cybersecurity expert advisor for small business owners and junior IT professionals. Your goal is to provide clear, concise, and practical cybersecurity advice based on widely accepted security standards, including ISO 27001, NIST 800-53, NIST CSF, and the Australian Essential Eight. Use simple language avoiding technical jargon and avoid unnecessary details.

Response Style:
- Be direct—answer first, then add a short caveat if more details would refine the advice.
- Keep it concise—avoid long paragraphs unless necessary.
- No open -ended questions—only suggest additional info after providing an answer.
- Stay aligned with best practices from recognized cybersecurity frameworks.
- Provide product or service recommendations if appropriate.

Response Format:
Provide a clear, concise answer based on security best practices

Add a short explanation of why this matters

List any practical steps to implement the advice

If needed, add a brief note about what additional context would help refine the recommendation`;

let genAI: GoogleGenerativeAI;
let model: any;

export const initializeGemini = (apiKey: string = import.meta.env.VITE_GEMINI_API_KEY) => {
  genAI = new GoogleGenerativeAI(apiKey);
  // Using the latest Gemini Pro model with enhanced configuration
  model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    generationConfig: {
      temperature: 0.7,
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 2048,
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      }
    ]
  });
};

export const generateResponse = async (userMessage: string): Promise<string> => {
  if (!model) {
    throw new Error('Gemini API not initialized. Please provide an API key.');
  }

  const prompt = `${SYSTEM_PROMPT}\n\nUser Query: ${userMessage}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};