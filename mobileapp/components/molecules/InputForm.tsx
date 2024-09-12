import { View, TextInput } from "react-native";
import Label from "@/components/atoms/Label";
import Image from "@/components/atoms/Image";

export default function InputForm({ textForLabel, textForButton, textForPlaceholder }) {
    return (
        <View
            style={{
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
            }}
        >
            <Image
                uri="'https://i.pinimg.com/736x/d8/58/3f/d8583fe287203342606b495f3045209a.jpg'" 
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Label
                labelText={textForLabel}
                style={{
                    fontSize: 30, 
                }}
            />
            <TextInput
                defaultValue={textForPlaceholder}
                style={{
                    borderWidth: 1,
                    padding: 10,
                    width: 400,
                }}
            />
        </View>
    );
}
