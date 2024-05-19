import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ResizeMode, Video } from "expo-av";
import { Feather } from "@expo/vector-icons";

import { FormField } from "@components/form-field";
import { CustomButton } from "@components/custom-button";

import { useCreateScreen } from "./create.hook";

export function CreateScreen() {
    const {
        form,
        uploading,
        handleSubmit,
        handleInputFilling,
        handleOpenPicker,
    } = useCreateScreen();

    return (
        <SafeAreaView className='bg-primary h-full'>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={20}
                className='flex-1'>
                <ScrollView className='px-4 my-6 overflow-visible'>
                    <Text className='text-2xl text-white font-psemibold'>
                        Upload Video
                    </Text>

                    <FormField
                        title='Video Title'
                        value={form.title}
                        placeholder='Give your video a catch title...'
                        onChangeText={event =>
                            handleInputFilling(event, "title")
                        }
                        otherStyles='mt-10'
                    />

                    <View className='mt-7 space-y-2'>
                        <Text className='text-base text-gray-100 font-pmedium'>
                            Upload Video
                        </Text>
                        <TouchableOpacity
                            onPress={() => handleOpenPicker("video")}>
                            {form.video ? (
                                <Video
                                    source={{ uri: form.video.uri }}
                                    className='w-full h-64 rounded-2xl'
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                    isLooping
                                />
                            ) : (
                                <View className='w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center'>
                                    <View className='w-14 h-14 border border-dashed border-secondary-100 justify-center items-center'>
                                        <Feather
                                            name='upload'
                                            size={20}
                                            color='orange'
                                        />
                                    </View>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    <View className='mt-7 space-y-2'>
                        <Text className='text-base text-gray-100 font-pmedium'>
                            Thumbnail Image
                        </Text>

                        <TouchableOpacity
                            onPress={() => handleOpenPicker("image")}>
                            {form.thumbnail ? (
                                <Image
                                    source={{ uri: form.thumbnail.uri }}
                                    resizeMode='cover'
                                    className='w-full h-64 rounded-2xl'
                                />
                            ) : (
                                <View className='w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2'>
                                    <Feather
                                        name='upload'
                                        size={20}
                                        color='orange'
                                    />
                                    <Text className='text-sm text-gray-100 font-p-medium'>
                                        Choose a file
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    <FormField
                        title='AI Prompt'
                        value={form.prompt}
                        placeholder='The prompt you used to create this video'
                        onChangeText={event =>
                            handleInputFilling(event, "prompt")
                        }
                        otherStyles='mt-10'
                    />
                    <CustomButton
                        title='Submit & Publish'
                        onPress={handleSubmit}
                        containerStyles='mt-7'
                        isLoading={uploading}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
