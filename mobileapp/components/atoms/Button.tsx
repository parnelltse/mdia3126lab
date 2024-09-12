import { Button as NativeButton, View } from "react-native";

export default function MyButton({ buttonText }) {
    return (
        <View>
            <NativeButton title={buttonText} />
        </View>
    );
}
