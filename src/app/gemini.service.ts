import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../environments/environment';  // or wherever your env is

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
  }

  async generateText(prompt: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      const result = await model.generateContent(prompt);
      const response = await result.response;  // Ensure response is awaited
      return response.text();
    } catch (error) {
      console.error('Gemini API error:', error);  // ← This will show real Gemini errors if any
      throw error;  // Or return a fallback string: return 'Sorry, something went wrong.';
    }
  }

  // Bonus: Add streaming version later (more engaging for chat)
  // async *generateStream(prompt: string) { ... }
}