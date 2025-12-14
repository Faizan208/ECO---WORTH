import { redirect } from 'next/navigation';
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { createClient } from '@/lib/supabase/server';
import type { UserRole } from '@/lib/data';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch profile to get role
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const userRole = (profile?.role as UserRole) || 'industry';

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <DashboardSidebar userRole={userRole} />
        <main className="flex-1 flex flex-col h-full overflow-hidden">
          <DashboardHeader />
          <div className="flex-1 w-full p-4 overflow-y-auto bg-secondary/30">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
