import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  // API de IA para gerar código
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "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",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Você é um programador expert." },
        { role: "user", content: `Gere um app completo baseado nesta ideia: ${prompt}` }
      ]
    })
  });

  const data = await response.json();
  const code = data.choices[0].message.content;
  res.json({ code });
});

app.listen(3000, () => console.log("Servidor rodando"));
