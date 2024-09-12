import { Image as NativeImage, View, StyleSheet } from "react-native";

export default function MyImage() {
    return (
        <View style={styles.container}>
            <NativeImage
                style={styles.image}
                source={{
                    uri: 'https://i.pinimg.com/736x/d8/58/3f/d8583fe287203342606b495f3045209a.jpg',
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 400, 
        height: 400,
    },
});
