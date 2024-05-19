import { DocumentPickerAsset } from "expo-document-picker";

export type FormProps = {
    title: string;
    video: DocumentPickerAsset | null;
    prompt: string;
    thumbnail: DocumentPickerAsset | null;
};
