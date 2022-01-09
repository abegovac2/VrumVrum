import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

import CarImage from "../svg/undraw_city_driver_re_0x5e.svg";
const colors = require("../color/colors.json");

const VerificationScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../image/start_screen.png")}
    >
      <TouchableOpacity
        style={styles.redirect}
        onPress={() => console.log("klikno1")}
      >
        {/*ovdje samo redirect*/}
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  redirect: {
    alignContent: "center",
    padding: 10,
    position: "absolute",
    bottom: 56,
    borderRadius: 400,
    padding: 34,
  },
});
export default VerificationScreen;
