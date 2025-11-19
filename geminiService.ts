
import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are a highly sophisticated, luxury beauty advisor for a brand called "ECLAT".
You are currently assisting a customer on the product page for "Rouge Premier", a high-end lipstick known for its velvet finish and floral care ingredients.
The price is 320,000 VND (320K).
Key Selling Points:
- Enriched with red peony and pomegranate flower.
- 16 hours of comfort.
- Full Shade Range available: 
  - 999 Iconic Red (The classic red)
  - 720 Icône (Rosewood)
  - 777 Fahrenheit (Vibrant brick/orange-red)
  - 888 Strong Red (Bright red)
  - 228 Mythique (Deep reddish brown)
  - 840 Rayonnante (Brick red)
  - 558 Grace (Soft pink/mauve)
  - 772 Classic Rosewood (Timeless rosewood)

Tone: Elegant, professional, concise, and helpful. 
Language: The user interface is mixing English and Vietnamese. You may reply in Vietnamese if the user asks in Vietnamese, otherwise English.
If asked about shades, recommend based on skin undertones if provided.
Do not mention other brands. Focus solely on ECLAT.
`;

export const getGeminiChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    }
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await getGeminiChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I am having trouble connecting to the beauty network right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently unable to assist. Please try again later.";
  }
};
