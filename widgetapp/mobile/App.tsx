import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./src/theme";
import { Widget } from "./src/components/Widget";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"

export default function App() {
 const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium
  });

  if(!fontsLoaded){
  return <AppLoading />
} 

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
