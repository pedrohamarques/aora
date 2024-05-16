import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { TAB_ROUTES, TabRoutesParams } from "@typings/routes";

export function useHomeScreen() {
    const navigation =
        useNavigation<BottomTabNavigationProp<TabRoutesParams>>();

    function handleCreatePress() {
        navigation.navigate(TAB_ROUTES.CREATE);
    }

    return {
        handleCreatePress,
    };
}
