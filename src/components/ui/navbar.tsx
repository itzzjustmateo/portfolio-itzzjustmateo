'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, Layers, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/projects', icon: Layers },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-neutral-900/60 backdrop-blur-md shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        {/* Clickable Title */}
        <Link href="/" className="text-2xl font-extrabold text-white drop-shadow-md hover:opacity-80 transition-opacity">
          itzzmateo
        </Link>

        {/* Desktop Icons */}
        <div className="hidden sm:flex gap-3">
          <TooltipProvider>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                    <Link href={link.href}>
                      <Button
                        variant="ghost"
                        className="p-3 border border-neutral-700 bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
                      >
                        <Icon className="h-5 w-5 text-blue-400 transition-colors hover:text-blue-300" />
                        <span className="sr-only">{link.label}</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{link.label}</TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>

        {/* Mobile Hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden p-2 rounded-md border border-neutral-700 bg-neutral-800/40 shadow-md hover:bg-neutral-800 transition-all duration-150 hover:shadow-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-2 px-4 pb-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="p-3 border border-neutral-700 bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 w-full justify-center"
                >
                  <Icon className="h-5 w-5 text-blue-400 transition-colors hover:text-blue-300" />
                  <span className="sr-only">{link.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
