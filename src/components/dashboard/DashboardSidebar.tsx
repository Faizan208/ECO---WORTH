"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons/logo";
import { dashboardNavItems } from "@/lib/data";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import type { UserRole } from "@/lib/data";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface DashboardSidebarProps {
  userRole?: UserRole;
}

export default function DashboardSidebar({ userRole = "industry" }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const isNavItemVisible = (roles: UserRole[]) => roles.includes(userRole);

  const renderNavItems = (items: typeof dashboardNavItems) => {
    return items.map((item) => {
      if (!isNavItemVisible(item.role)) return null;

      const isActive = pathname === item.href;

      if (item.children) {
        // Simple group for now, can be extended to collapsible
        return (
          <div key={item.title}>
            <h4 className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {item.title}
            </h4>
            <SidebarMenu>
              {item.children.map((child) => {
                if (!isNavItemVisible(child.role)) return null;
                const isChildActive = pathname === child.href;
                return (
                  <SidebarMenuItem key={child.title}>
                    <Link href={child.href} passHref>
                      <SidebarMenuButton
                        isActive={isChildActive}
                        asChild
                      >
                        <div>
                          <child.icon />
                          <span>{child.title}</span>
                        </div>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </div>
        );
      }

      return (
        <SidebarMenuItem key={item.title}>
          <Link href={item.href} passHref>
            <SidebarMenuButton
              isActive={isActive}
              asChild
            >
              <div>
                <item.icon />
                <span>{item.title}</span>
              </div>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      );
    });
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-sidebar-foreground">
            EcoWorth
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>{renderNavItems(dashboardNavItems)}</SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
