
import { createClient } from '@supabase/supabase-js'

// Get environment variables or use empty strings as fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only create client if URL and key are available
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add a simple check function to verify if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== '' && supabaseAnonKey !== '';
};
