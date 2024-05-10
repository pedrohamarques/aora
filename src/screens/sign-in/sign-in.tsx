import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { FormField } from "@components/form-field";
import { CustomButton } from "@components/custom-button";

import { useSignInScreen } from "./sign-in.hook";

export function SignInScreen() {
    const {
        form,
        isSubmitting,
        setForm,
        showPassword,
        setShowPassword,
        handleSignIn,
        handleSignUpPress,
    } = useSignInScreen();
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center h-full px-4 my-6'>
                    <Image
                        source={require("@assets/images/logo.png")}
                        className='w-[115px] h-[35px]'
                        resizeMode='contain'
                    />

                    <Text className='text-2xl text-white font-psemibold mt-10 '>
                        Log in to Aora
                    </Text>

                    <FormField
                        title='Email'
                        value={form.email}
                        onChangeText={email => setForm({ ...form, email })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                        testID='screens.sign-in.form-field.email'
                        autoCapitalize='sentences'
                        autoCorrect={false}
                    />
                    <FormField
                        title='Password'
                        value={form.password}
                        onChangeText={password =>
                            setForm({ ...form, password })
                        }
                        otherStyles='mt-7'
                        secureTextEntry={!showPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        testID='screens.sign-in.form-field.password'>
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}>
                            <Feather
                                name={`${!showPassword ? "eye" : "eye-off"}`}
                                size={24}
                                color={"gray"}
                            />
                        </TouchableOpacity>
                    </FormField>

                    <CustomButton
                        testID='screens.sign-in.custom-button'
                        title='Sign In'
                        onPress={handleSignIn}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={handleSignUpPress}>
                            <Text className='text-lg font-psemibold text-secondary'>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
