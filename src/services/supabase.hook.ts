import { supabase } from "./supabase";

import { Database } from "./types";

type FetchDataParametersProps = {
    table: keyof Database["public"]["Tables"];
    select?: string;
};

type FetchLatestDataParametersProps = FetchDataParametersProps & {
    limit: number;
    order: string;
};

export function useSupabase() {
    async function fetchData<K>({ table, select }: FetchDataParametersProps) {
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

    async function fetchLatestData<K>({
        limit,
        order,
        table,
        select,
    }: FetchLatestDataParametersProps) {
        try {
            const { data } = await supabase
                .from(table)
                .select(select)
                .order(order, { ascending: false })
                .limit(limit)
                .returns<K>();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchData,
        fetchLatestData,
    };
}
