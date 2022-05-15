import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Verification from "./app/screens/VerificationScreen";
import Start from "./app/screens/StartScreen";
import Login from "./app/screens/LoginScreen";
import Map from "./app/screens/MapScreen";
import Settings from "./app/screens/SettingsScreen";
import Drivers from "./app/screens/DriversScreen";
import User from "./app/screens/UserScreen";
import CurrentDrive from "./app/screens/CurrentDriveScreen";
import Help from "./app/screens/HelpScreen";


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialrouteName="Start">
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/>
        <Stack.Screen name="Map" component={Map} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="Drivers" component={Drivers} options={{ headerShown: false }}/>
        <Stack.Screen name="User" component={User} options={{ headerShown: false }}/>
        <Stack.Screen name="CurrentDrive" component={CurrentDrive} options={{ headerShown: false }}/>
        <Stack.Screen name="Help" component={Help} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
