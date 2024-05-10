import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { z } from "zod";

import { supabase } from "@services/supabase";

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
        username: z.string().min(3).trim(),
    });

    function handleSignInPress() {
        navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
    }

    async function handleSignUp() {
        const validation = signUpFormSchema.safeParse(form);
        if (validation.success) {
            setIsSubmitting(true);
            const { data, error } = await supabase.auth.signUp({
                email: form.email,
                password: form.password,
            });

            if (!error && !data.user) {
                return Alert.alert(
                    "Signup",
                    "Check your e-mail for the login link",
                );
            }

            if (error) {
                return Alert.alert("Error", error.message);
            }
            setIsSubmitting(false);
            navigation.replace(PUBLIC_ROUTES.SUCCESS_SIGN_UP, {
                email: form.email,
                password: form.password,
            });
        }
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
