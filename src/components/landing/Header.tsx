"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/icons/logo";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // State to hold user session

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check auth state on mount
  useEffect(() => {
    const checkUser = async () => {
      const { createClient } = await import("@/lib/supabase/client");
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-bold">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Tag className="h-4 w-4" />
          <span>Black Friday Sale! Get 15% OFF on all Pro plans.</span>
        </div>
      </div>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          // Always show background to ensure readability over video
          "border-b border-border/60 bg-background/80 backdrop-blur-lg"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">
              EcoWorth
            </span>
          </Link>

          <nav className="hidden items-center gap-4 lg:gap-6 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <ThemeToggle />
            {user ? (
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Register</Link>
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <SheetHeader className="mb-8">
                  <SheetTitle asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Logo className="h-8 w-8 text-primary" />
                      <span className="font-headline text-2xl font-bold text-foreground">
                        EcoWorth
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col">
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto flex flex-col gap-4">
                    {user ? (
                      <Button asChild>
                        <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                      </Button>
                    ) : (
                      <>
                        <Button variant="outline" asChild>
                          <Link
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Login
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link
                            href="/signup"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Register
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
