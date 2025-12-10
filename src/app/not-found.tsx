"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-white p-6">
      <h1 className="text-6xl sm:text-7xl font-extrabold drop-shadow-lg mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl text-neutral-300 mb-6">
        Oops! Page not found.
      </h2>
      <p className="text-neutral-400 mb-8 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Button>
      </Link>
    </main>
  );
}
