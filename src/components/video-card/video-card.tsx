import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { VideoProps } from "@typings/data";

import { useVideoCard } from "./video-card.hook";

type VideoCardProps = {
    testID?: string;
    video: VideoProps;
};

export function VideoCard({
    video,
    testID = "components.video-card",
}: VideoCardProps) {
    const { playing, handlePlayPress } = useVideoCard();

    return (
        <View testID={testID} className='flex-col items-center px-4 mb-14'>
            <View className='flex-row gap-3 items-start'>
                <View className='justify-center items-center flex-row flex-1'>
                    <View className='w-[46px] h-[46px] border border-secondary justify-center items-center p-0.5 rounded-lg'>
                        <Image
                            source={{ uri: video.creatorId.avatar }}
                            className='w-full h-full rounded-lg'
                            resizeMode='cover'
                        />
                    </View>

                    <View className='justify-center flex-1 ml-3 gap-y-1'>
                        <Text
                            className='text-white font-psemibold text-sm'
                            numberOfLines={1}>
                            {video.title}
                        </Text>
                        <Text
                            className='text-xs text-gray-100 font-pregular'
                            numberOfLines={1}>
                            {video.creatorId.username}
                        </Text>
                    </View>
                </View>

                <View className='pt-2'>
                    <Feather name='more-vertical' size={20} color='white' />
                </View>
            </View>

            {playing ? (
                <Text className='text-white'>Playing</Text>
            ) : (
                <TouchableOpacity
                    className='w-full h-60 rounded-xl mt-3 relative justify-center'
                    activeOpacity={0.7}
                    onPress={handlePlayPress}>
                    <Image
                        source={{ uri: video.thumbnail }}
                        className='w-full h-full rounded-xl mt-3'
                        resizeMode='cover'
                    />
                    <Feather
                        name='play-circle'
                        size={48}
                        color='white'
                        style={{ position: "absolute", alignSelf: "center" }}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}
