import { Text, TextInput, TextInputProps, View } from "react-native";

import { Feather } from "@expo/vector-icons";

type FormFieldProps = TextInputProps & {
    testID?: string;
    title: string;
    otherStyles?: string;
    isSensitive?: boolean;
};

export function FormField({
    testID = "components.form-field",
    title,
    otherStyles,
    isSensitive,
    children,
    ...rest
}: FormFieldProps) {
    return (
        <View testID={testID} className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>
                {title}
            </Text>

            <View className='w-full flex-row h-16 px-4 bg-black-200 border-2 rounded-2xl focus:border-secondary items-center'>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base w-full'
                    placeholderTextColor={"#7b7b8b"}
                    {...rest}
                />
                {children}
            </View>
        </View>
    );
}
