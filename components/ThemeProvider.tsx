// @/components/ThemeProvider.tsx
"use client"; // 这确保它是 Client Component

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemeProvider>
    </HeroUIProvider>
  );
}
