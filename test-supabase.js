import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing Supabase Connection...');
console.log('URL:', supabaseUrl);
console.log('Key length:', supabaseKey?.length);

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    try {
        const { data, error } = await supabase.from('test_connection').select('*').limit(1);
        // It's okay if the table doesn't exist, we just want to see if the network request fails with "Failed to fetch"
        // or if we get a Supabase error (which means connection succeeded).
        if (error) {
            console.log('Got error from Supabase (expected if table missing, but means connection worked):', error.message);
            console.log('Error details:', error);
        } else {
            console.log('Connection successful, data:', data);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

testConnection();
