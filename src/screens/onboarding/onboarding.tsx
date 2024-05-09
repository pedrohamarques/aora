import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CustomButton } from "@components/custom-button";

import { useOnboardingScreen } from "./onboarding.hook";

export function OnboardingScreen() {
    const { handleSignInPress } = useOnboardingScreen();
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView
                contentContainerStyle={{ height: "100%" }}
                showsVerticalScrollIndicator={false}>
                <View className='w-full justify-start items-center h-full px-4'>
                    <Image
                        source={require("@assets/images/logo.png")}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />
                    <Image
                        source={require("@assets/images/cards.png")}
                        className='max-w-[380px] w-full h-[300px]'
                        resizeMode='contain'
                    />

                    <View className='relative mt-5'>
                        <Text className='text-white text-3xl font-bold text-center'>
                            Discover Endless Possibilities with{" "}
                            <Text className='text-secondary-200'>Aora</Text>
                        </Text>
                        <Image
                            source={require("@assets/images/path.png")}
                            className='w-[136px] h-[15px] absolute -bottom-2 right-20'
                            resizeMode='contain'
                        />
                    </View>

                    <Text className='text-gray-100 mt-7 text-center font-pregular text-sm'>
                        Where creativity meets innovation: embark on a journey
                        of limitless exploration with Aora
                    </Text>

                    <CustomButton
                        title='Continue with E-mail'
                        containerStyles='w-full mt-7'
                        onPress={handleSignInPress}
                        testID='screens.onboarding.custom-button'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
