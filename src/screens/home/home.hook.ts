import { useState } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { TAB_ROUTES, TabRoutesParams } from "@typings/routes";

export function useHomeScreen() {
    const [refreshing, setRefreshing] = useState(false);

    const navigation =
        useNavigation<BottomTabNavigationProp<TabRoutesParams>>();

    function handleCreatePress() {
        navigation.navigate(TAB_ROUTES.CREATE);
    }

    async function handleRefresh() {
        setRefreshing(true);
        setRefreshing(false);
    }

    return {
        refreshing,
        handleCreatePress,
        handleRefresh,
    };
}
