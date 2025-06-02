'use client';

import Link from 'next/link';

export default function ExampleFaqSection() {
  return (
    <section
      className="w-full flex flex-col text-start gap-4 scroll-mt-[125px]"
      id="faq"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>

      <div className="space-y-10">

        {/* Q1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">What are these bedroom layout examples?</h3>
          <p className="text-sm text-default-600">
            These are sample bedroom layouts that follow key feng shui principles — such as proper bed placement,
            chi (energy) flow, and furniture positioning. Each example is analyzed for how well it supports restful energy,
            balance, and harmony in a real living space.
          </p>
        </div>

        {/* Q2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Can I get feng shui advice for my own bedroom?</h3>
          <p className="text-sm text-default-600">
            Yes! You can upload your bedroom floor plan and our AI tool will analyze it instantly based on
            traditional feng shui principles. It provides personalized suggestions for bed placement,
            energy flow, and room layout. Try it here →
            <Link href="/bedroom-layout" className="text-primary underline ml-1">
              AI Feng Shui Room Planner
            </Link>
          </p>
        </div>

        {/* Q3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">How accurate are these feng shui analyses?</h3>
          <p className="text-sm text-default-600">
            The feng shui suggestions are based on centuries-old principles interpreted by AI models trained on real
            feng shui case studies. While not a replacement for a traditional master, AI can quickly evaluate layouts
            for directional flow, elemental balance, and positioning rules with high consistency.
          </p>
        </div>

        {/* Q4 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">What makes a good feng shui bedroom layout?</h3>
          <ul className="list-disc pl-5 text-sm text-default-600 space-y-1">
            <li><strong>Bed</strong> placed against a solid wall, not facing the door</li>
            <li><strong>Clear chi flow</strong> — unobstructed walking space and gentle energy circulation</li>
            <li><strong>Functional zones</strong> — separating rest, work, and storage areas</li>
            <li><strong>No mirrors facing the bed</strong> or door-aligned bathroom doors</li>
          </ul>
          <p className="text-sm text-default-600 mt-3">
            Want to go deeper? Read our full feng shui bedroom guide:
          </p>
          <ul className="list-disc pl-5 text-sm text-default-600 space-y-1 mt-1">
            <li>
              <Link href="/blog/bedroom-fengshui-guide-part1" className="text-primary underline">
                Part 1: Feng Shui Basics for Bedroom Layout
              </Link>
            </li>
            <li>
              <Link href="/blog/bedroom-fengshui-guide-part2" className="text-primary underline">
                Part 2: Advanced Tips for Better Sleep & Energy
              </Link>
            </li>
          </ul>
        </div>

        {/* Q5 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Where can I learn more about feng shui?</h3>
          <p className="text-sm text-default-600">
            We’ve written beginner-friendly articles on feng shui principles and how AI tools can assist.
            Check out our guides:
          </p>
          <ul className="list-disc pl-5 text-sm text-default-600 space-y-1 mt-2">
            <li>
              <Link href="/blog/what-is-fengshui" className="text-primary underline">
                What is Feng Shui?
              </Link>
            </li>
            <li>
              <Link href="/blog/ai-fengshui-tools" className="text-primary underline">
                How AI Can Help with Feng Shui
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}