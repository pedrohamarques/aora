import { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
    CompositeNavigationProp,
    RouteProp,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useSupabase } from "@services/supabase.hook";

import { VideoProps } from "@typings/data";
import {
    HOME_STACK_ROUTES,
    HomeStackRoutesParams,
    TAB_ROUTES,
    TabRoutesParams,
} from "@typings/routes";

export function useSearchScreen() {
    const [searchedVideos, setSearchedVideos] = useState<VideoProps[] | null>(
        null,
    );

    const navigation =
        useNavigation<
            CompositeNavigationProp<
                NativeStackNavigationProp<HomeStackRoutesParams>,
                BottomTabNavigationProp<TabRoutesParams>
            >
        >();

    const route =
        useRoute<RouteProp<HomeStackRoutesParams, HOME_STACK_ROUTES.SEARCH>>();

    const { fetchSearchData } = useSupabase();

    const { search } = route.params;

    const [searchInput, setSearchInput] = useState<string | null>(search);

    function handleCreatePress() {
        navigation.navigate(TAB_ROUTES.CREATE);
    }

    async function handleSearchedVideos() {
        const fetchedSearchedVideos = await fetchSearchData<VideoProps[]>({
            table: "videos",
            select: "*, creatorId(username, avatar)",
            query: search,
        });

        if (fetchedSearchedVideos) {
            setSearchedVideos(fetchedSearchedVideos);
        }
    }

    function handleSearchPress() {
        if (!searchInput) {
            return Alert.alert(
                "Missing input",
                "Please type something to search results across database",
            );
        }

        navigation.navigate(HOME_STACK_ROUTES.SEARCH, { search: searchInput });
    }

    useEffect(() => {
        handleSearchedVideos();
    }, [search]);

    return {
        search,
        searchedVideos,
        searchInput,
        handleCreatePress,
        handleSearchPress,
        setSearchInput,
    };
}
