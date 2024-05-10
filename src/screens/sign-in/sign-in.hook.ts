import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { supabase } from "@services/supabase";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PUBLIC_ROUTES, PublicRoutesParam } from "@typings/routes";

const initialSignInFormState = {
    email: "",
    password: "",
};

export function useSignInScreen() {
    const [form, setForm] = useState(initialSignInFormState);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigation =
        useNavigation<NativeStackNavigationProp<PublicRoutesParam>>();

    function handlePasswordVisibility() {
        setShowPassword(isShowing => !isShowing);
    }

    async function handleSignIn() {
        setIsSubmitting(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password,
        });

        if (!error && !data.user) {
            setIsSubmitting(false);
            return Alert.alert(
                "Error ",
                "Check your e-mail for the Login Link",
            );
        }

        if (error) {
            setIsSubmitting(false);
            return Alert.alert("Error ", error.message);
        }
    }

    function handleSignUpPress() {
        navigation.navigate(PUBLIC_ROUTES.SIGN_UP);
    }
    return {
        form,
        showPassword,
        isSubmitting,
        setForm,
        setShowPassword,
        handlePasswordVisibility,
        handleSignIn,
        handleSignUpPress,
    };
}
