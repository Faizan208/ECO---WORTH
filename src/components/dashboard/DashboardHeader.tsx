"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "@/components/dashboard/UserNav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from 'react';
import Link from "next/link";
import { Search, PlusSquare, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function DashboardHeader() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b bg-background px-4">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <Link href="/dashboard" className="hidden md:flex items-center gap-2 font-bold text-xl">
            <span className="text-primary font-headline">EcoWorth</span>
          </Link>
        </div>

        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="flex w-full items-center space-x-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search waste, reports, or devices..."
                className="w-full h-10 rounded-l-full border bg-secondary/50 pl-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <button className="h-10 px-6 rounded-r-full bg-secondary border border-l-0 hover:bg-secondary/80 flex items-center justify-center">
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="md:hidden">
            <button className="p-2"><Search className="h-5 w-5" /></button>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <PlusSquare className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Create Listing</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <ThemeToggle />
          <UserNav />
        </div>
      </header>
    </>
  );
}
