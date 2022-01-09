import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './app/screens/HomeScreen';
import Verification from './app/screens/VerificationScreen';
import Start from './app/screens/StartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Start></Start>
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
