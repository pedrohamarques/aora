import { supabase } from "./supabase";

import { Database } from "./types";

export function useSupabase() {
    async function fetchData<K>(
        table: keyof Database["public"]["Tables"],
        select?: string,
    ) {
        try {
            const { data } = await supabase
                .from(table)
                .select(select)
                .returns<K>();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchData,
    };
}
