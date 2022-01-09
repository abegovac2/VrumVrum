import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CarImage from "../svg/undraw_city_driver_re_0x5e.svg";
const colors = require("../color/colors.json");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ justifyContent: "space-evenly" }}>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Logo
      </Text>
      <Text style={styles.vvText}>VROOM VROOM</Text>
      <Text style={styles.gold}>SINCE 2021</Text>
      <CarImage width={200} height={200} />
      <View style={styles.button}>
        <TouchableOpacity>
          <View>
            <Text style={{ alignSelf: "center" }}>{"->"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "center",
    width: 40,
    height: 40,
    backgroundColor: colors.primaryColor,
    borderRadius: 30,
  },
  vvText: {
    fontSize: 30,
    color: colors.yellow,
    fontWeight: "bold",
    borderColor: colors.black,
    backgroundColor: colors.black,
    borderRadius: 20,
    padding: 10,
  },
  gold: { color: colors.gold, fontWeight: "bold" },
});
export default HomeScreen;
