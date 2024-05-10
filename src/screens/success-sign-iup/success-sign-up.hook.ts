import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { supabase } from "@services/supabase";
import { PUBLIC_ROUTES, PublicRoutesParam } from "@typings/routes";
import { Alert } from "react-native";

export function useSuccessSignUpScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<PublicRoutesParam>>();

    const routes =
        useRoute<RouteProp<PublicRoutesParam, PUBLIC_ROUTES.SUCCESS_SIGN_UP>>();

    const { email, password } = routes.params;

    function handleCancelPress() {
        navigation.replace(PUBLIC_ROUTES.SIGN_IN);
    }

    async function handleSignIn() {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return Alert.alert("Error", "It is not possible to log in now", [
                { text: "Try again", onPress: handleSignIn },
                {
                    text: "Cancel",
                    style: "destructive",
                    onPress: handleCancelPress,
                },
            ]);
        }
    }

    return {
        handleSignIn,
    };
}
