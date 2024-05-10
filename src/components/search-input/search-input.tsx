import {
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type SearchInputProps = TextInputProps & {
    testID?: string;
};

export function SearchInput({
    testID = "components.search-input",
    ...rest
}: SearchInputProps) {
    return (
        <View
            className='w-full flex-row h-16 px-4 bg-black-200 border-2 rounded-2xl focus:border-secondary  space-x-4 items-center justify-center'
            testID={testID}>
            <TextInput
                className='flex-1 text-base text-white font-pregular mb-6 h-full'
                placeholderTextColor={"#7b7b8b"}
                {...rest}
            />
            <TouchableOpacity>
                <Feather name='search' size={24} color='white' />
            </TouchableOpacity>
        </View>
    );
}
