import { FlatList, RefreshControl, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { VideoCard } from "@components/video-card";
import { ListHeader } from "@components/list-header";
import { EmptyList } from "@components/empty-list";

import { useSearchScreen } from "./search.hook";

export function SearchScreen() {
    const {
        search,
        searchedVideos,
        handleCreatePress,
        handleSearchPress,
        setSearchInput,
    } = useSearchScreen();
    return (
        <SafeAreaView className='h-full bg-primary'>
            <FlatList
                data={searchedVideos}
                renderItem={({ item }) => <VideoCard video={item} />}
                ListHeaderComponent={
                    <ListHeader
                        onSearchPress={handleSearchPress}
                        onChangeSearch={setSearchInput}
                        screen='Search'
                        headerTitle={search}
                        testID='screens.search.list-header'
                    />
                }
                ListEmptyComponent={
                    <EmptyList
                        title='No Videos found'
                        subtitle='No video found for this search'
                        onButtonPress={handleCreatePress}
                        testID='screens.search.empty-list'
                    />
                }
            />
        </SafeAreaView>
    );
}
