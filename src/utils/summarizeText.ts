import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const summarizeText = async (
  text: string
): Promise<{ title: string; summary: string }> => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "학습 자료를 분석하여 제목과 400자 이내 요약을 JSON으로 제공하세요.",
      },
      {
        role: "user",
        content: `다음을 요약하세요:\n\n${text.substring(0, 10000)}`,
      },
    ],
    response_format: { type: "json_object" },
  });

  return JSON.parse(completion.choices[0].message.content || "{}");
};
