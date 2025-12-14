import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error("Missing Supabase environment variables. Please check .env.local and restart the server.");
    }

    // console.log("Initializing Supabase Client with URL:", supabaseUrl); // Debugging
    return createBrowserClient(supabaseUrl.trim(), supabaseKey.trim())
}
