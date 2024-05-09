import { Feather } from "@expo/vector-icons";

type TabIconProps = {
    color: string;
    focused: boolean;
    name: keyof typeof Feather.glyphMap;
};

export function TabIcon({ color, focused, name }: TabIconProps) {
    return <Feather name={name} color={color} size={24} />;
}
