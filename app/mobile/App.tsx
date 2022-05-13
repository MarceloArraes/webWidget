import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { StyleSheet, Text, View } from 'react-native';
import { Widget } from './src/components/Widget';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

 /*  if (!fontsLoaded) {
    return SplashScreen.preventAutoHideAsync();
  } */
  return (
    <View style={styles.container}>
      <Text>MARCELO </Text>
      
      <StatusBar style="auto" />
      <Widget />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#763a3a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
