import { createClient } from "@supabase/supabase-js";

import { SUPABASE_KEY, SUPABASE_URL } from "@env";

import { Database } from "./types";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
