import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ListHeader } from "./components/list-header";
import { EmptyList } from "./components/empty-list";

import { useHomeScreen } from "./home.hook";

export function HomeScreen() {
    const { refreshing, handleCreatePress, handleRefresh } = useHomeScreen();
    return (
        <SafeAreaView className='h-full bg-primary'>
            <FlatList
                data={[]}
                renderItem={() => <View />}
                refreshControl={
                    <RefreshControl
                        onRefresh={handleRefresh}
                        refreshing={refreshing}
                    />
                }
                ListHeaderComponent={<ListHeader />}
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
