"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    setChecked(next === "dark");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* ✅ HeroUI 测试组件 */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Button color="primary">测试按钮</Button>
          <Switch
            isSelected={checked}
            onValueChange={toggleTheme}
            color="secondary"
            size="lg"
          >
            切换主题
          </Switch>
        </div>

        {/* 你原来的内容可以保留 */}
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
    </div>
  );
}