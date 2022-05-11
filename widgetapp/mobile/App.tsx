import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./src/theme";
import { Widget } from "./src/components/Widget";

export default function App() {
  return (
    <View style={styles.container}>
      <Widget />
      <Text> Marcelo App test </Text>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
