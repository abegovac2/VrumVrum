import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import MenuBar from "../elements/MenuBar";
import GoogleMap from "../elements/GoogleMap";

import Search from "../svg/search-svgrepo-com.svg";
import Menu from "../svg/menu-svgrepo-com (1).svg";

const colors = require("../color/colors.json");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.search, {zIndex: 1}]}>
        <TouchableOpacity style={styles.ikona}>
          <Search width={20} height={20} />
        </TouchableOpacity>
        <TextInput style={{ width: "59%" }} placeholder="Pretraži"></TextInput>
        <TouchableOpacity style={styles.ikona}>
          <Menu width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <GoogleMap></GoogleMap>
      </View>
      {/* za bottom meni */}
      <View style={{ position: "absolute", bottom: 0 }}>
        <MenuBar
          homeAction={() => console.log("home")}
          menuAction={() => console.log("menu")}
          addAction={() => console.log("add")}
          friendAction={() => console.log("friend")}
          settigsAction={() => console.log("settings")}
        ></MenuBar>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "pink",
  },
  dugme: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    margin: 3,
  },
  crnoD: {
    backgroundColor: colors.black,
  },
  bijeloD: {
    borderColor: colors.black,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  forma: {
    flex: 2,
    backgroundColor: colors.white,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
  unos: {
    backgroundColor: colors.darkGray,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  search: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: colors.secondaryColor,
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,
    position: "absolute",
    top: "10%",
  },
  ikona: {
    padding: 10,
  },
});
export default HomeScreen;
