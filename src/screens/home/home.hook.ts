import { useEffect, useState } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { useSupabase } from "@services/supabase.hook";

import { TAB_ROUTES, TabRoutesParams } from "@typings/routes";
import { VideoProps } from "@typings/data";

export function useHomeScreen() {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [videos, setVideos] = useState<VideoProps[] | null>(null);
    const [latestVideos, setLatestVideos] = useState<VideoProps[] | null>(null);

    const { fetchData, fetchLatestData } = useSupabase();

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
        const fetchedVideos = await fetchData<VideoProps[]>({
            table: "videos",
            select: "*, creatorId(username, avatar)",
        });
        if (fetchedVideos) {
            setVideos(fetchedVideos);
        }
    }

    async function handleLatestVideos() {
        const fetchedLatestVideos = await fetchLatestData<VideoProps[]>({
            table: "videos",
            select: "*, creatorId(username, avatar)",
            limit: 7,
            order: "createdAt",
        });
        if (fetchedLatestVideos) {
            setLatestVideos(fetchedLatestVideos);
        }
    }

    useEffect(() => {
        handleFetchVideos();
        handleLatestVideos();
    }, []);

    return {
        isRefreshing,
        videos,
        latestVideos,
        handleCreatePress,
        handleRefresh,
    };
}
