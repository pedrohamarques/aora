import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { z } from "zod";

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

    const signUpFormSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        username: z.string().min(3),
    });

    function handleSignInPress() {
        navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
    }

    function handleSignUp() {
        const validation = signUpFormSchema.safeParse(form);
        console.log(validation);
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
