import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fpgmrgviothvvqfrgrls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZ21yZ3Zpb3RodnZxZnJncmxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NzM1NjAsImV4cCI6MjA0MDQ0OTU2MH0.wrBPnMxuf4M0ozGu63xALUqDvqa8NMRAAj1tGrDlFUQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
