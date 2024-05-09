import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { FormField } from "@components/form-field";
import { CustomButton } from "@components/custom-button";

import { useSignUpScreen } from "./sign-up.hook";

export function SignUpScreen() {
    const {
        form,
        showPassword,
        isSubmitting,
        setForm,
        handleSignInPress,
        handleSignUp,
        setShowPassword,
    } = useSignUpScreen();
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
                        Sign Up to Aora
                    </Text>

                    <FormField
                        title='Username'
                        value={form.username}
                        onChangeText={username =>
                            setForm({ ...form, username })
                        }
                        otherStyles='mt-7'
                        testID='screens.sign-up.form-field.username'
                    />

                    <FormField
                        title='Email'
                        value={form.email}
                        onChangeText={email => setForm({ ...form, email })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                        testID='screens.sign-up.form-field.email'
                    />
                    <FormField
                        title='Password'
                        value={form.password}
                        onChangeText={password =>
                            setForm({ ...form, password })
                        }
                        otherStyles='mt-7'
                        secureTextEntry={!showPassword}
                        testID='screens.sign-up.form-field.password'>
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
                        testID='screens.sign-up.custom-button'
                        title='Sign Up'
                        onPress={handleSignUp}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={handleSignInPress}>
                            <Text className='text-lg font-psemibold text-secondary'>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
