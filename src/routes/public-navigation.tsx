import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "@screens/onboarding";

import { PUBLIC_ROUTES, PublicRoutesParam } from "@typings/routes";

export function PublicNavigation() {
    const PublicNavigation = createNativeStackNavigator<PublicRoutesParam>();
    return (
        <PublicNavigation.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <PublicNavigation.Screen
                name={PUBLIC_ROUTES.ONBOARDING}
                component={OnboardingScreen}
            />
        </PublicNavigation.Navigator>
    );
}
