import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './app/screens/HomeScreen';
import Verification from './app/screens/VerificationScreen';
import Start from './app/screens/StartScreen';
import Login from './app/screens/LoginScreen';
import Map from './app/screens/MapScreen';
import Settings from './app/screens/SettingsScreen';
import Drivers from './app/screens/DriversScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Drivers/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
