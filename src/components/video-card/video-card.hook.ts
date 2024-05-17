import { AVPlaybackStatus } from "expo-av";
import { useState } from "react";

export function useVideoCard() {
    const [playing, setPlaying] = useState(false);

    function handlePlayPress() {
        setPlaying(true);
    }

    function handleFinishingVideo(status: AVPlaybackStatus) {
        if (status.isLoaded && status.didJustFinish) {
            setPlaying(false);
        }
    }
    return {
        playing,
        handlePlayPress,
        handleFinishingVideo,
    };
}
