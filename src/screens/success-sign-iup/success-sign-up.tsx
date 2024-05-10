import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSuccessSignUpScreen } from "./success-sign-up.hook";
import { CustomButton } from "@components/custom-button";

export function SuccessSignUpScreen() {
    const { handleSignIn } = useSuccessSignUpScreen();
    return (
        <SafeAreaView className='bg-primary h-full justify-center items-center'>
            <View className='w-full justify-between h-full px-4 my-6 py-10'>
                <View className=''>
                    <Image
                        source={require("@assets/images/logo.png")}
                        className='w-[115px] h-[35px] mb-4'
                        resizeMode='contain'
                    />
                    <Text className='text-3xl text-white font-psemibold mt-4'>
                        Success!
                    </Text>
                    <Text className='text-xl text-white font-pmedium mt-4 mb-8'>
                        Press the button below to access the app.
                    </Text>
                </View>
                <CustomButton
                    title='Log In'
                    containerStyles='w-full mt-7'
                    onPress={handleSignIn}
                />
            </View>
        </SafeAreaView>
    );
}
