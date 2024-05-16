import { useState } from "react";

export function useVideoCard() {
    const [playing, setPlaying] = useState(false);

    function handlePlayPress() {
        setPlaying(previousState => !previousState);
    }
    return {
        playing,
        handlePlayPress,
    };
}
