import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PUBLIC_ROUTES, PublicRoutesParam } from "@typings/routes";
import { useState } from "react";

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

    function handleSignIn() {
        console.log("Sign In");
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
