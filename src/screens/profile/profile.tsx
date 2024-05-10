import { supabase } from "@services/supabase";
import { Button, Text, View } from "react-native";

export function ProfileScreen() {
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>Profile Screen</Text>
            <Button onPress={() => supabase.auth.signOut()} title='Logout' />
        </View>
    );
}
