import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Settings from "../svg/settings-svgrepo-com.svg";
import Home from "../svg/home-svgrepo-com.svg";
import Menu from "../svg/menu-svgrepo-com.svg";
import Plus from "../svg/plus-circle-fill-svgrepo-com.svg";
import Friends from "../svg/people-svgrepo-com.svg";

const colors = require("../color/colors.json");

const MenuBar = ({
  navigation
}) => {
  return (
    <View style={styles.menuBar}>
      <TouchableOpacity onPress={() => navigation.navigate("CurrentDrive")} style={[styles.options, styles.size]}>
        <Home width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Drivers")}style={[styles.options, styles.size]}>
        <Menu width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Map")} style={[styles.plusOption, styles.size]}>
        <Plus width={40} height={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("User")} style={[styles.options, styles.size]}>
        <Friends width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={[styles.options, styles.size]}>
        <Settings width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBar: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: colors.secondaryColor,

  },
  plusOption: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 10,
  },
  options: {
    marginTop: 15,
  },
  size:{
      padding: 10
  }
});

export default MenuBar;
