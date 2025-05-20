// app/api/fengshui-analysis/room-layout/route.ts
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import bedroomFengshuiAnalysisPrompt from '@/prompts/bedroomFengshuiAnalysisPrompt';
import bedroomRules from '@/prompts/bedroomRules.json';

function buildPrompt(info: { notes: string }) {
  const parts: string[] = [];

  if (info.notes?.trim()) {
    parts.push(`The user added this note: "${info.notes}".`);
  }

  const rulesText = bedroomRules.map(
    (r) =>
      `- ${r.title}\n  Summary: ${r.short}\n  Why it matters: ${r.reason}\n  Tip: ${r.solution}`
  ).join('\n\n');

  parts.push(`Here are the Feng Shui principles for reference:\n\n${rulesText}`);

  return parts.join('\n\n');
}


const openai = createOpenAI({
  compatibility: 'compatible',
  baseURL: process.env.NEXT_PUBLIC_OPENAI_BASE_URL,
});

export async function POST(req: Request) {
  const { images, info } = await req.json();
  // console.log('images', images.length);
  // console.log('info', info);

  const userPrompt = buildPrompt(info);
  // console.log('userPrompt', userPrompt);

  const result = await generateText({
    model: openai('gpt-4o-all'),
    system: bedroomFengshuiAnalysisPrompt,
    maxSteps: 5,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: userPrompt },
          ...images.map((img: string) => ({
            type: 'image' as const,
            image: img.replace(/^data:image\/\w+;base64,/, ''), // 仅保留 base64
          })),
        ],
      },
    ],
  });

  return Response.json({ result: result.text });
}