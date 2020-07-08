import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MyStack from './Route/stackNavigation';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const getFonts = () => Font.loadAsync({
  'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
});

const store = ConfigureStore();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Provider store = {store}>
          <MyStack />
        </Provider>
      </View>

    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})