"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Github,
  Youtube,
  Twitch,
  MessageCircle,
  Code,
  Server,
  Laptop,
} from "lucide-react";

const links = [
  { label: "My Github", href: "https://github.com/itzzjustmateo", icon: Github,  },
  { label: "My YouTube", href: "https://youtube.com/@OneFlex3", icon: Youtube },
  { label: "My Twitch", href: "https://twitch.tv/@OneFlex3", icon: Twitch },
  { label: "My Discord", href: "https://dc.gg/developer", icon: MessageCircle },
];

const techStack = [
  { label: "Next.js", href: "https://nextjs.org", icon: Code },
  { label: "TypeScript", href: "https://typescriptlang.org", icon: Code },
  { label: "Tailwind", href: "https://tailwindcss.com", icon: Laptop },
  { label: "Node.js", href: "https://nodejs.org", icon: Server },
];

const projects = [
  { label: "TechNova", href: "/projects/technova", icon: Server },
  { label: "NovaCore", href: "/projects/novacore", icon: Server },
  { label: "DevFlare", href: "/projects/devflare", icon: Laptop },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-white p-6 space-y-8">
      {/* Title */}
      <div className="text-center">
        <Link href="/">
          <h1 className="text-5xl font-extrabold uppercase tracking-wide drop-shadow-md cursor-pointer hover:text-blue-400 transition-colors">
            itzzmateo
          </h1>
        </Link>
        <p className="mt-3 text-neutral-300">
          Fullstack Web-Developer • NextJS Expert • Still a minor
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <TooltipProvider>
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <Tooltip key={l.label}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    asChild
                    className="p-4 border border-neutral-700 rounded-xl bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
                  >
                    <Link href={l.href}>
                      <Icon className="h-6 w-6 text-blue-400" />
                      <span className="sr-only">{l.label}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">{l.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>

      {/* Tech Stack */}
      <div className="w-full max-w-lg grid grid-cols-2 sm:grid-cols-4 gap-3">
        <TooltipProvider>
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <Tooltip key={tech.label}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    asChild
                    className="p-4 border border-neutral-700 rounded-xl bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
                  >
                    <Link href={tech.href}>
                      <Icon className="h-6 w-6 text-blue-400" />
                      <span className="sr-only">{tech.label}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">{tech.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>

      {/* Currently Working On */}
      <div className="w-full max-w-lg p-4 border border-neutral-700 rounded-xl bg-neutral-800/40 backdrop-blur-sm shadow-md">
        <h2 className="font-bold text-lg mb-2">Currently Working On…</h2>
        <p className="text-neutral-300">Building the Portfolio.</p>
      </div>

      {/* Mini About Me */}
      <div className="w-full max-w-lg p-4 border border-neutral-700 rounded-xl bg-neutral-800/40 backdrop-blur-sm shadow-md">
        <h2 className="font-bold text-lg mb-2">About Me</h2>
        <p className="text-neutral-300">
          I love building small fun projects and learning new web technologies.
          Still a minor, but always coding!
        </p>
      </div>

      {/* Mini Project Gallery */}
      <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TooltipProvider>
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <Tooltip key={p.label}>
                <TooltipTrigger asChild>
                  <Link href={p.href}>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 p-4 border border-neutral-700 rounded-xl bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 w-full justify-center"
                    >
                      <Icon className="h-5 w-5 text-purple-400 hover:text-purple-300" />
                      <span className="sr-only">{p.label}</span>
                    </Button>
                  </Link>
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
