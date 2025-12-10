"use client";

import React, { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Laptop, Code, Globe, MessageCircle, ArrowLeft } from "lucide-react";

const projectsData: Record<
  string,
  { 
    label: string; 
    desc: string; 
    website?: string;
    discord?: string;
    tech: { label: string; href: string; icon: any }[] 
  }
> = {
  technova: {
    label: "TechNova",
    desc: "Tiny Minecraft server + Roblox micro-games studio.",
    website: "https://draftportfolio.vercel.app",
    discord: "https://dc.gg/technova",
    tech: [
      { label: "Next.js", href: "https://nextjs.org", icon: Code },
      { label: "Node.js", href: "https://nodejs.org", icon: Server },
      { label: "Tailwind", href: "https://tailwindcss.com", icon: Laptop },
    ],
  },
  novacore: {
    label: "NovaCore",
    desc: "My Minecraft CityBuild Network.",
    website: "https://novacorede.vercel.app",
    discord: "https://dc.gg/nc",
    tech: [
      { label: "TypeScript", href: "https://typescriptlang.org", icon: Code },
      { label: "Node.js", href: "https://nodejs.org", icon: Server },
      { label: "Next.js", href: "https://nextjs.org", icon: Code },
    ],
  },
  devflare: {
    label: "DevFlare",
    desc: "My personal coding studio.",
    website: "/",
    discord: "https://dc.gg/developer",
    tech: [
      { label: "React", href: "https://react.dev", icon: Code },
      { label: "Tailwind", href: "https://tailwindcss.com", icon: Laptop },
      { label: "Node.js", href: "https://nodejs.org", icon: Server },
    ],
  },
};

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { project: projectParam } = use(params);
  const project = projectsData[projectParam.toLowerCase()];

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-white p-6 pt-24">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link href="/projects">
          <Button
            variant="outline"
            className="mt-6 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Projects
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-white p-6 pt-32 space-y-8">
      {/* Title */}
      <div className="text-center">
        <div>
            <h1 className="cursor-default text-5xl font-extrabold uppercase tracking-wide drop-shadow-md transition-colors">
                {project.label}
            </h1>
            <p className="cursor-default mt-3 text-neutral-300">
                {project.desc}
            </p>
        </div>

        {/* Website & Discord Buttons */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {project.website && (
            <Link href={project.website} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <Globe className="w-5 h-5" /> Website
              </Button>
            </Link>
          )}
          {project.discord && (
            <Link href={project.discord} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> Discord
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <TooltipProvider>
          {project.tech.map((t) => {
            const Icon = t.icon;
            return (
              <Tooltip key={t.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Card className="flex flex-col items-center p-5 hover:scale-105 transition-all duration-300 cursor-pointer border-neutral-700 bg-neutral-800/30 shadow-lg">
                      <CardContent className="flex flex-col items-center gap-2">
                        <Icon className="h-8 w-8 text-blue-400" />
                        <span className="text-sm font-semibold text-white">{t.label}</span>
                      </CardContent>
                    </Card>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">{t.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>

      {/* Back Button */}
      <div className="w-full flex justify-center mt-12">
        <Link href="/projects">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Projects
          </Button>
        </Link>
      </div>
    </main>
  );
}
