import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_API_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log(supabaseKey);

export const supaClient = createClient(supabaseUrl, supabaseKey);
