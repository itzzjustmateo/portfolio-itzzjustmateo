"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Server, Laptop } from "lucide-react";

const projects = [
  {
    label: "TechNova",
    desc: "Tiny Minecraft server + Roblox micro-games studio.",
    href: "/projects/technova",
    icon: Server,
  },
  {
    label: "NovaCore",
    desc: "My Minecraft CityBuild Network.",
    href: "/projects/novacore",
    icon: Server,
  },
  {
    label: "DevFlare",
    desc: "My personal coding studio.",
    href: "/projects/devflare",
    icon: Laptop,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-white p-6 pt-32 space-y-8">
      {/* Title */}
      <div className="text-center">
        <Link href="/">
          <h1 className="text-5xl font-extrabold uppercase tracking-wide drop-shadow-md cursor-pointer hover:text-blue-400 transition-colors">
            Projects
          </h1>
        </Link>
        <p className="mt-3 text-neutral-300">
          A small collection of things I‘m building.
        </p>
      </div>

      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TooltipProvider>
          {projects.map((p) => {
            const Icon = p.icon;

            return (
              <Tooltip key={p.label}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    asChild
                    className="hover:scale-101 flex flex-col items-center gap-4 p-6 h-full border border-neutral-700 rounded-xl bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 w-full"
                  >
                    <Link href={p.href}>
                      <div className="flex flex-col items-center gap-4 text-white">
                        <Icon className="h-12 w-12 scale-192 text-purple-400" />
                        <div className="text-lg font-semibold text-center text-white">
                          {p.label}
                        </div>
                        <p className="text-neutral-400 text-sm text-center">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  </Button>
                </TooltipTrigger>

                <TooltipContent side="bottom">{p.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </main>
  );
}
