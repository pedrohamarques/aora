import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native";

import { AuthContext } from "@contexts/auth-provider";

import { useSupabase } from "@services/supabase.hook";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    HOME_STACK_ROUTES,
    HomeStackRoutesParams,
    TAB_ROUTES,
    TabRoutesParams,
} from "@typings/routes";

import { UserProps, VideoProps } from "@typings/data";

export function useHomeScreen() {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [videos, setVideos] = useState<VideoProps[] | null>(null);
    const [latestVideos, setLatestVideos] = useState<VideoProps[] | null>(null);
    const [userData, setUserData] = useState<UserProps | null>(null);
    const [searchInput, setSearchInput] = useState<string | null>(null);

    const { session } = useContext(AuthContext);

    const { fetchData, fetchLatestData, fetchUserData } = useSupabase();

    const navigation =
        useNavigation<
            CompositeNavigationProp<
                NativeStackNavigationProp<HomeStackRoutesParams>,
                BottomTabNavigationProp<TabRoutesParams>
            >
        >();

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

    function handleSearchPress() {
        if (!searchInput) {
            return Alert.alert(
                "Missing input",
                "Please type something to search results across database",
            );
        }

        navigation.replace(HOME_STACK_ROUTES.SEARCH, { search: searchInput });
        setSearchInput(null);
    }

    async function handleFetchUserData() {
        const fetchedData = await fetchUserData<UserProps[]>(session?.user.id!);

        if (fetchedData) {
            setUserData(fetchedData[0]);
        }
    }

    useEffect(() => {
        handleFetchVideos();
        handleLatestVideos();
        handleFetchUserData();
    }, []);

    return {
        isRefreshing,
        videos,
        latestVideos,
        userData,
        handleCreatePress,
        handleRefresh,
        handleSearchPress,
        setSearchInput,
    };
}
