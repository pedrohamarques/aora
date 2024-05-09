import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
    testID?: string;
    title: string;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
};

export function CustomButton({
    testID = "components.custom-button",
    title,
    isLoading,
    containerStyles,
    textStyles,
    ...rest
}: CustomButtonProps) {
    return (
        <TouchableOpacity
            testID={testID}
            activeOpacity={0.7}
            disabled={isLoading}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
            {...rest}>
            <Text
                className={`text-primary font-psemibold text-lg ${textStyles} `}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
