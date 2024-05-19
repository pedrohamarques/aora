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

type FetchSearchDataParametersProps = FetchDataParametersProps & {
    query: string;
};

type insertDataProps = {
    title: string;
    thumbnail: string;
    prompt: string;
    video: string;
    creatorId: string;
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

    async function fetchSearchData<K>({
        query,
        table,
        select,
    }: FetchSearchDataParametersProps) {
        try {
            const { data } = await supabase
                .from(table)
                .select(select)
                .ilike("title", `%${query}%`)
                .returns<K>();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserPosts<K>(id: string) {
        try {
            const { data } = await supabase
                .from("videos")
                .select("*, creatorId(username, avatar)")
                .eq("creatorId", id)
                .returns<K>();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchUserData<K>(id: string) {
        try {
            const { data } = await supabase
                .from("users")
                .select()
                .eq("accountId", id)
                .returns<K>();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function insertData<K>(item: insertDataProps) {
        try {
            const { data } = await supabase
                .from("videos")
                .insert(item)
                .returns<K>();
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchData,
        fetchLatestData,
        fetchSearchData,
        getUserPosts,
        fetchUserData,
        insertData,
    };
}
