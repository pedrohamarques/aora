import { useContext, useEffect, useState } from "react";

import { useSupabase } from "@services/supabase.hook";
import { supabase } from "@services/supabase";

import { AuthContext } from "@contexts/auth-provider";

import { VideoProps } from "@typings/data";
import { Session } from "@supabase/supabase-js";

export function useProfileScreen() {
    const [videos, setVideos] = useState<VideoProps[] | null>(null);

    const { getUserPosts } = useSupabase();

    const { session } = useContext(AuthContext);

    async function handleFetchUserPosts() {
        const fetchedUserPosts = await getUserPosts<VideoProps[]>(
            session?.user.id!,
        );
        if (fetchedUserPosts) {
            setVideos(() => fetchedUserPosts);
        }
    }

    async function handleLogoutPress() {
        await supabase.auth.signOut();
    }

    useEffect(() => {
        handleFetchUserPosts();
    }, []);

    return {
        videos,
        handleLogoutPress,
    };
}
