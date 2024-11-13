import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Invalid prompt provided" });
    }

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      });

      const aiResponse = completion.data.choices[0]?.message?.content?.trim();
      if (!aiResponse) {
        return res
          .status(500)
          .json({ error: "OpenAI returned an empty response" });
      }

      res.status(200).json({ reply: aiResponse });
    } catch (error) {
      console.error("Error with OpenAI API:", error);

      res.status(500).json({
        error: error.response?.data?.error?.message || "Internal server error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
