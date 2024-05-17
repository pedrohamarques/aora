import { useCallback, useState } from "react";

import { VideoProps } from "@typings/data";
import { ViewToken } from "react-native";

type useTrendingProps = {
    posts: VideoProps[];
};

export function useTrending({ posts }: useTrendingProps) {
    const [activeItem, setActiveItem] = useState(posts[0]);
    const [play, setPlay] = useState(false);

    function handlePlayPress() {
        setPlay(true);
    }

    const handleViewableItems = useCallback(
        (viewableItems: ViewToken<VideoProps>[]) => {
            if (viewableItems.length > 0) {
                setActiveItem(viewableItems[0].item);
            }
        },
        [],
    );
    return {
        activeItem,
        play,
        handlePlayPress,
        handleViewableItems,
    };
}
