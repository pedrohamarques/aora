import { Text, View } from "react-native";

type InfoBoxProps = {
    testID?: string;
    title: string | number | null;
    titleStyles?: string;
    containerStyles?: string;
    subtitle?: string;
};

export function InfoBox({
    testID = "screens.profile.components.info-box",
    title,
    containerStyles,
    titleStyles,
    subtitle,
}: InfoBoxProps) {
    return (
        <View testID={testID} className={containerStyles}>
            <Text
                className={`text-white text-center font-psemibold ${titleStyles}`}>
                {title}
            </Text>
            <Text className='text-sm text-gray-100 text-center font-pregular'>
                {subtitle}
            </Text>
        </View>
    );
}
