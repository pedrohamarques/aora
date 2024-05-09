import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PUBLIC_ROUTES, PublicRoutesParam } from "@typings/routes";

export function useOnboardingScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<PublicRoutesParam>>();

    function handleSignInPress() {
        navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
    }

    return {
        handleSignInPress,
    };
}
