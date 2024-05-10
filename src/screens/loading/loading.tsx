import { SafeAreaView } from "react-native-safe-area-context";

import { CircleSnail } from "react-native-progress";

export function LoadingScreen() {
    return (
        <SafeAreaView className='bg-primary h-full justify-center items-center'>
            <CircleSnail thickness={12} color='#FF9C01' size={120} />
        </SafeAreaView>
    );
}
