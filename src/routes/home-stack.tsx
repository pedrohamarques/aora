import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/home";
import SearchScreen from "@screens/search";

import { HOME_STACK_ROUTES, HomeStackRoutesParams } from "@typings/routes";

export function HomeStack() {
    const Stack = createNativeStackNavigator<HomeStackRoutesParams>();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name={HOME_STACK_ROUTES.HOME}
                component={HomeScreen}
            />
            <Stack.Screen
                name={HOME_STACK_ROUTES.SEARCH}
                component={SearchScreen}
            />
        </Stack.Navigator>
    );
}
