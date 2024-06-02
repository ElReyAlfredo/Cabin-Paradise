import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jfvdtaaglxrifgqgpqwm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdmR0YWFnbHhyaWZncWdwcXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NDg0MzcsImV4cCI6MjAzMTAyNDQzN30.zzHNAKwVkgUi04tBkZlyfxOn5PD9hvi0vRsbwXCBd5w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
