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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from "@heroui/react";
import { useTheme } from "next-themes";
import { DesignIcon, MoonIcon, SunIcon } from "./Icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, LayoutIcon, BedroomIcon } from "./Icons";

export default function MyNavbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBlurred={false}
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
        <Dropdown className="hidden md:flex pt-[1px]">
          <NavbarItem className="hidden md:flex pt-[1px]">
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon />}
                radius="sm"
                variant="light"
              >
                Tools
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Fengshui Tools"
            itemClasses={{ base: "gap-4" }}
          >
            <DropdownItem
              key="layout"
              description="Optimize your floor layout for energy flow"
              startContent={<LayoutIcon className="text-primary-400"/>}
            >
              <Link href="/">Floor Layout Fengshui</Link>
            </DropdownItem>
            <DropdownItem
              key="bedroom"
              description="Fengshui insights for better sleep and harmony"
              startContent={<BedroomIcon className="text-primary-400"/>}
            >
              <Link href="/bedroom-layout">Bedroom Fengshui</Link>
            </DropdownItem>
            <DropdownItem
              key="design"
              description="Create and export room layouts for feng shui analysis"
              startContent={<DesignIcon className="text-primary-400"/>}
            >
              <Link href="/room-planner">Room & Layout planner</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden md:flex pt-[1px] gap-6">
          <Link
            href="/fengshui-bedroom-example"
            className="text-sm hover:text-primary-500 transition-colors"
          >
            Examples
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
        <NavbarMenuItem className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-sm text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Floor Layout Fengshui
          </Link>
          <Link
            href="/bedroom-layout"
            className="text-sm text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Bedroom Fengshui
          </Link>
          <Link
            href="/room-planner"
            className="text-sm text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Room & Layout planner
          </Link>
          <Link
            href="/fengshui-bedroom-example"
            className="text-sm text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Examples
          </Link>
          <Link
            href="/about"
            className="text-sm text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/fengshui-request"
            className="text-sm text-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Improve Our AI
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
