import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { StyleSheet, Text, View } from 'react-native';
import { Widget } from './src/components/Widget';
import { useCallback, useEffect } from 'react';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

useEffect(() => {
  async () => {
    await SplashScreen.preventAutoHideAsync();
   
  }
}, []);

const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await new Promise (resolve => setTimeout(resolve, 5000));
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

if(!fontsLoaded) {
  return null;
}else return (
    <View style={styles.container}>
      <Widget />
      <StatusBar style="auto" />
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
