import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BookmarkScreen from "@screens/bookmark";
import ProfileScreen from "@screens/profile";
import CreateScreen from "@screens/create";

import { TAB_ROUTES, TabRoutesParams } from "@typings/routes";
import { TabIcon, TabLabel } from "./components";

import { HomeStack } from "./home-stack";

export function TabNavigation() {
    const TabNavigation = createBottomTabNavigator<TabRoutesParams>();

    return (
        <TabNavigation.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#ffa001",
                tabBarInactiveTintColor: "#cdcde0",
                tabBarStyle: {
                    backgroundColor: "#161622",
                    borderTopWidth: 1,
                    borderTopColor: "#232533",
                    height: 84,
                },
            }}>
            <TabNavigation.Screen
                name={TAB_ROUTES.HOME}
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon color={color} focused={focused} name='home' />
                    ),
                    tabBarLabel: ({ color, focused }) => (
                        <TabLabel
                            title={TAB_ROUTES.HOME}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />
            <TabNavigation.Screen
                name={TAB_ROUTES.BOOKMARK}
                component={BookmarkScreen}
                options={{
                    headerShown: false,

                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            color={color}
                            focused={focused}
                            name='bookmark'
                        />
                    ),
                    tabBarLabel: ({ color, focused }) => (
                        <TabLabel
                            title={TAB_ROUTES.BOOKMARK}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />
            <TabNavigation.Screen
                name={TAB_ROUTES.CREATE}
                component={CreateScreen}
                options={{
                    headerShown: false,

                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            color={color}
                            focused={focused}
                            name='plus-circle'
                        />
                    ),
                    tabBarLabel: ({ color, focused }) => (
                        <TabLabel
                            title={TAB_ROUTES.CREATE}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />

            <TabNavigation.Screen
                name={TAB_ROUTES.PROFILE}
                component={ProfileScreen}
                options={{
                    headerShown: false,

                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon color={color} focused={focused} name='user' />
                    ),
                    tabBarLabel: ({ color, focused }) => (
                        <TabLabel
                            title={TAB_ROUTES.PROFILE}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />
        </TabNavigation.Navigator>
    );
}
