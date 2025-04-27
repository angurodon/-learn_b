"use client";

import { cn } from "@/lib/utils";
import { UserRoundCheck } from "lucide-react";

import { LangToggle } from "./lang-toggle";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center p-3", // まず bg-black を削除して...
        "bg-orange-50", // 新しい色クラスを追加 (ここをお好みの色に)
        "dark:bg-[#1F1F1F]", // ダークモードの色はそのまま
      )}
    >
      <Logo />
      <div className="flex h-5 w-full items-center justify-between space-x-4 md:ml-auto md:justify-end">
        <Separator orientation="vertical" />
        <ModeToggle />
        <LangToggle />
        <Separator orientation="vertical" />
        <UserRoundCheck className="text-green-500" />
      </div>
    </div>
  );
}
