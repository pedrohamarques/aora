import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "@screens/onboarding";
import SignInScreen from "@screens/sign-in";
import SignUpScreen from "@screens/sign-up";
import SuccessSignUpScreen from "@screens/success-sign-iup";

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
            <PublicNavigation.Screen
                name={PUBLIC_ROUTES.SIGN_IN}
                component={SignInScreen}
            />
            <PublicNavigation.Screen
                name={PUBLIC_ROUTES.SIGN_UP}
                component={SignUpScreen}
            />
            <PublicNavigation.Screen
                name={PUBLIC_ROUTES.SUCCESS_SIGN_UP}
                component={SuccessSignUpScreen}
            />
        </PublicNavigation.Navigator>
    );
}
