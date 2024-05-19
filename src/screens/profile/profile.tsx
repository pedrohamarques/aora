import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { VideoCard } from "@components/video-card";
import { EmptyList } from "@components/empty-list";

import { useProfileScreen } from "./profile.hook";

import { ListHeader } from "./components/list-header";

export function ProfileScreen() {
    const { videos, handleLogoutPress } = useProfileScreen();

    return (
        <SafeAreaView className='h-full bg-primary'>
            <FlatList
                data={videos}
                renderItem={({ item }) => <VideoCard video={item} />}
                ListHeaderComponent={
                    <ListHeader onLogout={handleLogoutPress} data={videos} />
                }
                ListEmptyComponent={
                    <EmptyList
                        title='No Videos found'
                        subtitle='No video found for this search'
                        onButtonPress={() => {}}
                        testID='screens.profile.empty-list'
                    />
                }
            />
        </SafeAreaView>
    );
}
