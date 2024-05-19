import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { VideoProps } from "@typings/data";

import { InfoBox } from "../info-box";

type ListHeaderProps = {
    testID?: string;
    onLogout: () => {};
    data: VideoProps[] | null;
};

export function ListHeader({
    testID = "screens.profile.components.list-header",
    onLogout,
    data,
}: ListHeaderProps) {
    return (
        <View
            testID={testID}
            className='w-full justify-center items-center mt-6 mb-12 px-4'>
            <TouchableOpacity
                className='w-full items-end mb-10'
                onPress={onLogout}>
                <Feather name='log-out' size={24} color='orange' />
            </TouchableOpacity>
            {data && (
                <>
                    <View className='w-16 h-16 border border-secondary rounded-lg justify-center items-center'>
                        <Image
                            source={{ uri: data[0].creatorId.avatar }}
                            className='w-[90%] h-[90%] rounded-lg'
                            resizeMode='cover'
                        />
                    </View>

                    <InfoBox
                        title={data[0].creatorId.username}
                        containerStyles='mt-5'
                        titleStyles='text-lg'
                        testID='screens.profile.components.list-header.username-info-box'
                    />

                    <View className='mt-5 flex-row'>
                        <InfoBox
                            title={data.length || 0}
                            subtitle='Posts'
                            containerStyles='mr-10'
                            titleStyles='text-xl'
                            testID='screens.profile.components.list-header.posts-info-box'
                        />

                        <InfoBox
                            title='1.2k'
                            subtitle='Followers'
                            titleStyles='text-xl'
                            testID='screens.profile.components.list-header.followers-info-box'
                        />
                    </View>
                </>
            )}
        </View>
    );
}
