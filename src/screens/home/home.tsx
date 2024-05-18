import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { VideoCard } from "@components/video-card";

import { ListHeader } from "./components/list-header";
import { EmptyList } from "./components/empty-list";

import { useHomeScreen } from "./home.hook";

export function HomeScreen() {
    const {
        videos,
        isRefreshing,
        latestVideos,
        handleCreatePress,
        handleRefresh,
        handleSearchPress,
        setSearchInput,
    } = useHomeScreen();
    return (
        <SafeAreaView className='h-full bg-primary'>
            <FlatList
                data={videos}
                renderItem={({ item }) => <VideoCard video={item} />}
                refreshControl={
                    <RefreshControl
                        onRefresh={handleRefresh}
                        refreshing={isRefreshing}
                    />
                }
                ListHeaderComponent={
                    <ListHeader
                        trendingPosts={latestVideos ?? []}
                        onSearchPress={handleSearchPress}
                        onChangeSearch={setSearchInput}
                    />
                }
                ListEmptyComponent={
                    <EmptyList
                        title='No Videos found'
                        subtitle='Be the first one to upload a video'
                        onButtonPress={handleCreatePress}
                    />
                }
            />
        </SafeAreaView>
    );
}
