const apiKey = "AIzaSyAlBt_psXpoe1H2b7pa4gv7Q9ii5jNQG_A";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

async function main() {
  const ai = new GoogleGenAI({});
  const config = {
    responseMimeType: "text/plain",
  };
  const model = "gemini-2.5-pro-preview-03-25";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
