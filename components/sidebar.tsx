"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageCircle,
  Settings2Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";

import FreeCounter from "./free-counter";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Icon Generation",
    icon: ImageIcon,
    href: "/svg",
    color: "text-pink-500",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  // {
  //   label: "Chat",
  //   icon: MessageCircle,
  //   href: "/chat",
  //   color: "text-violet-500",
  // },

  // {
  //   label: "Code Generation",
  //   icon: Code,
  //   href: "/code",
  //   color: "text-pink-500",
  // },
  {
    label: "Settings",
    icon: Settings2Icon,
    href: "/settings",
    color: "text-slate-200",
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/svg" className="flex items-center pl-3 mb-14">
          <div className="relative w-40 h-40 flex justify-center items-center">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
        </Link>
        <div
          className={cn("text-sm font-semibold pb-10", montserrat.className)}
        >
          AI-Driven Custom Icon Generation
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-slate-400"
              )}
              href={route.href}
              key={route.href}
            >
              <div className="flex items-center">
                <route.icon className={cn("w-6 h-6 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
