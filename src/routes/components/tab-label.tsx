import { Text } from "react-native";

type TabLabelProps = {
    focused: boolean;
    color: string;
    title: string;
};

export function TabLabel({ focused, title, color }: TabLabelProps) {
    return (
        <Text
            className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
            style={{ color }}>
            {title}
        </Text>
    );
}
