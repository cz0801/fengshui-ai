"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Switch,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function MyNavbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="pt-4"
    >
      <NavbarMenuToggle className="md:hidden" aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'} />
      <NavbarContent justify="start" className="gap-4">
        {/* Logo */}
        <NavbarBrand as="button" onClick={() => router.push("/")}>
          <div className="flex flex-col">
            <span className="text-xl text-primary-600 font-bold">AI Fengshui</span>
            <span className="text-sm text-primary-600">aifengshui.app</span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* 右侧内容 */}
      <NavbarContent justify="end">
        {/* 使用说明链接 */}
        <NavbarItem className="hidden md:flex pt-[1px] gap-4">
          <Link
            href="/"
            className="text-sm hover:text-primary-500 transition-colors"
          >
            Layout
          </Link>
          <Link 
            href="/bedroom-layout" 
            className="text-sm hover:text-primary-500 transition-colors"
          >
            Bedroom
          </Link>
          <Link
            href="/about"
            className="text-sm hover:text-primary-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm hover:text-primary-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/fengshui-request" 
            className="text-sm hover:text-primary-500 transition-colors"
          >
            Improve Our AI
          </Link>
        </NavbarItem>

        {/* 主题切换按钮 */}
        <NavbarItem>
          <Switch
            isSelected={theme === "dark"}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
            size="lg"
            color="default"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
            }
          />
        </NavbarItem>
      </NavbarContent>

      {/* 移动端展开菜单内容 */}
      <NavbarMenu className="pt-10">
        <NavbarMenuItem className="flex flex-col gap-2">
          <Link
            href="/"
            className="text-sm text-primary-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Layout
          </Link>
          <Link
            href="/bedroom-layout"
            className="text-sm text-primary-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Bedroom
          </Link>
          <Link
            href="/about"
            className="text-sm text-primary-400"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm text-primary-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/fengshui-request"
            className="text-sm text-primary-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Improve Our AI
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
