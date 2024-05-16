import { useEffect, useState } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { useSupabase } from "@services/supabase.hook";

import { TAB_ROUTES, TabRoutesParams } from "@typings/routes";
import { VideoProps } from "@typings/data";

export function useHomeScreen() {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [videos, setVideos] = useState<VideoProps[] | null>(null);

    const { fetchData } = useSupabase();

    const navigation =
        useNavigation<BottomTabNavigationProp<TabRoutesParams>>();

    function handleCreatePress() {
        navigation.navigate(TAB_ROUTES.CREATE);
    }

    async function handleRefresh() {
        setIsRefreshing(true);
        await handleFetchVideos();
        setIsRefreshing(false);
    }

    async function handleFetchVideos() {
        const fetchedVideos = await fetchData<VideoProps[]>(
            "videos",
            "*, creatorId(username, avatar)",
        );
        console.log(fetchedVideos);
        if (fetchedVideos) {
            setVideos(fetchedVideos);
        }
    }

    useEffect(() => {
        handleFetchVideos();
    }, []);

    return {
        isRefreshing,
        videos,
        handleCreatePress,
        handleRefresh,
    };
}
