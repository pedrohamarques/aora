import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PUBLIC_ROUTES, PublicRoutesParam } from "@typings/routes";

const initialSignInFormState = {
    email: "",
    username: "",
    password: "",
};

export function useSignUpScreen() {
    const [form, setForm] = useState(initialSignInFormState);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigation =
        useNavigation<NativeStackNavigationProp<PublicRoutesParam>>();

    function handleSignInPress() {
        navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
    }

    function handleSignUp() {
        console.log("Sign Up");
    }
    return {
        form,
        showPassword,
        isSubmitting,
        handleSignInPress,
        setForm,
        setShowPassword,
        handleSignUp,
    };
}
