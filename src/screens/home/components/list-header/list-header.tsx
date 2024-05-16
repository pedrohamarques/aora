import { SearchInput } from "@components/search-input";
import { Trending } from "@components/trending";
import { Image, Text, View } from "react-native";

type ListHeaderProps = {
    testID?: string;
};

export function ListHeader({
    testID = "screens.home.components.list-header",
}: ListHeaderProps) {
    return (
        <View testID={testID} className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
                <View>
                    <Text className='font-pmedium text-sm text-gray-100'>
                        Welcome Back,
                    </Text>
                    <Text className='text-2xl font-psemibold text-white mt-2'>
                        Pedro Almeida
                    </Text>
                </View>
                <View className='mt-1.5'>
                    <Image
                        source={require("@assets/images/logo-small.png")}
                        className='w-9 h-10'
                        resizeMode='contain'
                    />
                </View>
            </View>

            <SearchInput
                placeholder='Search for a video topic'
                testID='screens.home.component.list-header'
            />

            <View className='w-full flex-1 pt-5 pb-8'>
                <Text className='text-gray-100 text-lg font-pregular mb-3 '>
                    Latest Videos
                </Text>

                <Trending posts={[{ id: "1" }, { id: "2" }] ?? []} />
            </View>
        </View>
    );
}
