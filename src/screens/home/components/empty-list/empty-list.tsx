import { Image, Text, View } from "react-native";

import { CustomButton } from "@components/custom-button";

type EmptyListProps = {
    title: string;
    subtitle: string;
    testID?: string;
    onButtonPress: () => void;
};

export function EmptyList({
    title,
    subtitle,
    onButtonPress,
    testID = "screens.home.components.empty-list",
}: EmptyListProps) {
    return (
        <View testID={testID} className='justify-center items-center px-4'>
            <Image
                source={require("@assets/images/empty.png")}
                className='w-[270px] h-[215px]'
                resizeMode='contain'
            />
            <Text className='text-2xl font-psemibold text-white '>{title}</Text>
            <Text className='font-pmedium text-sm text-gray-100 mt-2'>
                {subtitle}
            </Text>

            <CustomButton
                title='Create a video'
                onPress={onButtonPress}
                containerStyles='w-full my-5'
            />
        </View>
    );
}
