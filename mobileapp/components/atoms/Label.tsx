import { Text, View } from "react-native";

export default function Label({ labelText, style }) {
    return (
        <View>
            <Text style={style}>{labelText}</Text>
        </View>
    );
}
