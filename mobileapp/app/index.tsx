import { Text, View } from "react-native";
import Post from "@/components/molecules/Post";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post
        textForLabel="Kanye"
        textForButton="woo"
        textForPlaceholder="Bada the bada the boom, I bada the boom, I bada the bing"
      />
    </View>
  );
}

