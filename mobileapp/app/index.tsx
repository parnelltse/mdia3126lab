import { Text, View } from "react-native";
import InputForm from "@/components/molecules/InputForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm 
        textForLabel="Kanye"
        textForButton="woo"
        textForPlaceholder="Bada the bada the boom, I bada the boom, I bada the bing"
      />
    </View>
  );
}

