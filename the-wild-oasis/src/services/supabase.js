import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qckrblspaazldcidgtxk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFja3JibHNwYWF6bGRjaWRndHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NTM0NzcsImV4cCI6MjAyNDUyOTQ3N30.IGjk1T87z35fCloAM-4h-YriOrmmLZdYf1Ya1NEjSc0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
