import {
    FlatList,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";

import { VideoProps } from "@typings/data";

import { useTrending } from "./trending.hook";

type TrendingProps = {
    testID?: string;
    posts: VideoProps[];
};

export function Trending({
    testID = "components.trending",
    posts,
}: TrendingProps) {
    const {
        activeItem,
        play,
        handlePlayPress,
        handleViewableItems,
        handleFinishingVideo,
    } = useTrending({ posts });

    const zoomIn = {
        from: {
            transform: [{ scale: 0.9 }],
        },
        to: {
            transform: [{ scale: 1 }],
        },
    };

    const zoomOut = {
        from: {
            transform: [{ scale: 1 }],
        },
        to: {
            transform: [{ scale: 0.9 }],
        },
    };

    return (
        <FlatList
            testID={testID}
            data={posts}
            keyExtractor={item => item.videoId!}
            horizontal
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={({ viewableItems }) =>
                handleViewableItems(viewableItems)
            }
            viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
            contentOffset={{ x: 170, y: 0 }}
            renderItem={({ item }) => (
                <Animatable.View
                    className='mr-5'
                    duration={500}
                    animation={activeItem === item ? zoomIn : zoomOut}>
                    {play && activeItem === item ? (
                        <Video
                            // using static link to see the video, link from fetched data not working
                            source={{
                                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                            }}
                            className='w-52 h-72 rounded-[35px] mt-3 bg-white/10'
                            resizeMode={ResizeMode.CONTAIN}
                            useNativeControls
                            shouldPlay
                            onPlaybackStatusUpdate={handleFinishingVideo}
                        />
                    ) : (
                        <TouchableOpacity
                            className='relative justify-center items-center'
                            activeOpacity={0.7}
                            onPress={handlePlayPress}>
                            <ImageBackground
                                source={{ uri: item.thumbnail }}
                                className='w-52 h-72 rounded-[35px] my-4 overflow-hidden shadow-lg shadow-black/40'
                                resizeMode='cover'
                            />
                            <Feather
                                name='play-circle'
                                size={48}
                                color='white'
                                style={{
                                    position: "absolute",
                                    alignSelf: "center",
                                }}
                            />
                        </TouchableOpacity>
                    )}
                </Animatable.View>
            )}
        />
    );
}
