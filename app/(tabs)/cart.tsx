import { ThemedText } from "@/components/ThemedText";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type="title">Cart Page</ThemedText>
      <ThemedText type="subtitle">This is the cart page</ThemedText>
    </View>
  );
}
