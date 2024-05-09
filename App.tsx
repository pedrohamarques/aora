import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("@assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("@assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("@assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("@assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("@assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("@assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("@assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("@assets/fonts/Poppins-Thin.ttf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style='auto' />
        </View>
    );
}
