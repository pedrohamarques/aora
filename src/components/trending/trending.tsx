import { FlatList, Text, View } from "react-native";

type TrendingProps = {
    testID?: string;
    posts: { id: string }[];
};

export function Trending({
    testID = "components.trending",
    posts,
}: TrendingProps) {
    return (
        <FlatList
            testID={testID}
            data={posts}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({ item }) => (
                <Text className='text-3xl text-white'>{item.id}</Text>
            )}
        />
    );
}
