"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Laptop, Code, Server } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-neutral-950 text-white p-6 pt-32 space-y-16">
      {/* Title */}
      <div className="text-center max-w-2xl space-y-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold uppercase tracking-wider drop-shadow-lg">
          About Me
        </h1>
        <p className="text-neutral-300 mt-2 text-lg sm:text-xl">
          I’m a fullstack web developer passionate about creating small, fun projects
          and learning new web technologies. Even though I’m still young, I love coding
          and experimenting with new ideas.
        </p>
      </div>

      {/* Skills / Tech Stack */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center p-6 hover:scale-105 transition-all duration-300 shadow-lg border border-neutral-700 bg-neutral-800/30">
          <CardContent className="flex flex-col items-center gap-3">
            <Laptop className="w-10 h-10 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Front-End</h3>
            <p className="text-neutral-400 text-sm text-center">
              Next.js, React, TailwindCSS
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center p-6 hover:scale-105 transition-all duration-300 shadow-lg border border-neutral-700 bg-neutral-800/30">
          <CardContent className="flex flex-col items-center gap-3">
            <Server className="w-10 h-10 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Back-End</h3>
            <p className="text-neutral-400 text-sm text-center">
              Node.js, Supabase
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center p-6 hover:scale-105 transition-all duration-300 shadow-lg border border-neutral-700 bg-neutral-800/30">
          <CardContent className="flex flex-col items-center gap-3">
            <Code className="w-10 h-10 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Other Skills</h3>
            <p className="text-neutral-400 text-sm text-center">
              TypeScript, Git, REST APIs, Web Deployment
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact / Call-to-Action */}
      <div className="flex flex-col items-center space-y-4">
        <p className="text-neutral-400 text-center max-w-md">
          Want to collaborate or check out my projects? Reach out and let's build
          something amazing!
        </p>
        <Link href="/projects">
          <Button variant="outline" className="px-8 py-4 flex items-center gap-2">
            View Projects
          </Button>
        </Link>
      </div>
    </main>
  );
}
