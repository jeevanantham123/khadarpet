import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mthzhbwlvpxzvozjeeoh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aHpoYndsdnB4enZvemplZW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxNjU2ODgsImV4cCI6MTk3ODc0MTY4OH0.QIw15GaIzePw5qcoLtSh0NjS4QZzGuTeneIads9HRv0"
);

export { supabase };
