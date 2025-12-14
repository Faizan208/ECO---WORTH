import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type { UserRole } from "@/lib/data";
import { IndustryDashboard } from "@/components/dashboard/IndustryDashboard";
import { RecyclerDashboard } from "@/components/dashboard/RecyclerDashboard";

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    const role: UserRole = (profile?.role as UserRole) || 'industry';
    const tier: string = profile?.tier || 'free'; // Default to free if missing

    // Render dashboard based on role
    if (role === 'recycler') {
        return <RecyclerDashboard user={user} tier={tier} />;
    }

    // Default to Industry dashboard for 'industry' and 'admin' (for now)
    return <IndustryDashboard user={user} tier={tier} />;
}
