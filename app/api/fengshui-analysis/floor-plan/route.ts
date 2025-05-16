// app/api/fengshui-analysis/floor-plan/route.ts
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import fengshuiFloorPlanPrompt from '@/prompts/fengshuiFloorPlanPrompt';

function buildPrompt(info: {
  northUp: string;
  type: string;
  totalFloors: number;
  currentFloor: number;
  notes: string;
}) {
  const parts: string[] = [];

  parts.push(
    info.northUp === 'yes'
      ? 'The floor plan follows the convention that the top faces North.'
      : 'The floor plan does not follow the convention that the top faces North.'
  );

  if (info.type === 'house') {
    parts.push('This is a standalone house.');
  } else if (info.type === 'apartment') {
    parts.push(
      `This is an apartment located on floor ${info.currentFloor} of a ${info.totalFloors}-floor building.`
    );
  }

  if (info.notes?.trim()) {
    parts.push(`The user added this note: "${info.notes}".`);
  }

  return parts.join(' ');
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
    model: openai('gpt-4o'),
    system: fengshuiFloorPlanPrompt,
    maxSteps: 20,
    maxTokens: 2000,
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