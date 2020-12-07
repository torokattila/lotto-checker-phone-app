import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { AppNavigator } from './routes/Drawer';

const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito': require('./assets/fonts/Nunito-Regular.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <AppNavigator />
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'nunito'
  },

});
