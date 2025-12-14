"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function TestConnectionPage() {
    const [status, setStatus] = useState("Testing...");
    const [error, setError] = useState<string | null>(null);
    const [envCheck, setEnvCheck] = useState<string>("");

    useEffect(() => {
        const runTest = async () => {
            try {
                const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
                const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

                setEnvCheck(`URL: ${url ? 'Present' : 'Missing'}, Key: ${key ? 'Present' : 'Missing'}`);

                if (!url || !key) {
                    setStatus("Failed: Missing Env Vars");
                    return;
                }

                const supabase = createClient();
                // Try a simple ping or auth check
                const { data, error } = await supabase.auth.getSession();

                if (error) {
                    setError(error.message);
                    setStatus("Supabase Error (Connection likely OK)");
                } else {
                    setStatus("Success: Connected to Supabase");
                }

            } catch (err: any) {
                setError(err.message || String(err));
                setStatus("Failed: Exception Thrown");
            }
        };

        runTest();
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Connection Test</h1>
            <div id="status" className="text-xl font-mono bg-gray-100 p-4 rounded">
                {status}
            </div>
            {error && (
                <div id="error" className="mt-4 text-red-500 font-mono">
                    Error: {error}
                </div>
            )}
            <div id="env-check" className="mt-4 text-blue-500">
                {envCheck}
            </div>
        </div>
    );
}
