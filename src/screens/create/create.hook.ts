import { useContext, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";

import { useSupabase } from "@services/supabase.hook";

import { FormProps } from "./types";
import { formSchema } from "./schemas";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TAB_ROUTES, TabRoutesParams } from "@typings/routes";
import { AuthContext } from "@contexts/auth-provider";

const initialFormProps = {
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
};

export function useCreateScreen() {
    const [form, setForm] = useState<FormProps>(initialFormProps);
    const [uploading, setUploading] = useState(false);

    const { session } = useContext(AuthContext);

    const navigation =
        useNavigation<BottomTabNavigationProp<TabRoutesParams>>();

    const { insertData } = useSupabase();

    async function handleOpenPicker(type: string) {
        const result = await DocumentPicker.getDocumentAsync({
            type:
                type === "image"
                    ? ["image/png", "image/jpg"]
                    : ["video/mp4", "video/gif"],
        });

        if (!result.canceled) {
            if (type === "image") {
                setForm(previousForm => ({
                    ...previousForm,
                    thumbnail: result.assets[0],
                }));
            } else {
                setForm(previousForm => ({
                    ...previousForm,
                    video: result.assets[0],
                }));
            }
        }
    }

    async function handleSubmit() {
        setUploading(true);
        try {
            const { error } = formSchema.safeParse(form);

            if (error) {
                return Alert.alert("Error", error.message);
            }

            await insertData({
                title: form.title,
                thumbnail: form.thumbnail?.uri!,
                prompt: form.prompt,
                creatorId: session?.user.id!,
                video: form.video?.uri!,
            });

            Alert.alert("Success!", "Video uploaded successfully");
            navigation.navigate(TAB_ROUTES.HOME);
        } catch (error) {
            console.log(error);
        } finally {
            setForm(initialFormProps);
            setUploading(false);
        }
    }
    function handleInputFilling(
        event: string,
        key: keyof typeof initialFormProps,
    ) {
        setForm({ ...form, [key]: event });
    }

    return {
        form,
        uploading,
        handleInputFilling,
        handleSubmit,
        handleOpenPicker,
    };
}
