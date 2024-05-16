import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ListHeader } from "./components/list-header";
import { EmptyList } from "./components/empty-list";

import { useHomeScreen } from "./home.hook";

export function HomeScreen() {
    const { handleCreatePress } = useHomeScreen();
    return (
        <SafeAreaView className='h-full bg-primary'>
            <FlatList
                data={[]}
                renderItem={() => <View />}
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
