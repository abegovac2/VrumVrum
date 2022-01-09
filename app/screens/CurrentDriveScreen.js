import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import MenuBar from "../elements/MenuBar";

import Plus from "../svg/plus-svgrepo-com.svg";
import Bell from "../svg/notification-svgrepo-com copy.svg";
import User from "../svg/profile-svgrepo-com copy.svg";
import Star from "../svg/star-svgrepo-com.svg";

const colors = require("../color/colors.json");

const CurrentDriveScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.white }}>
          Vožnja u toku
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.izaberi}>
            <Plus width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.izaberi}>
            <Bell width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.opcija}>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}
          >
            <Text style={{ fontSize: 15, padding: 4, fontWeight: "bold" }}>
              Progres Vaše Vožnje
            </Text>
            <Text
              style={{
                color: colors.lightBlue,
                padding: 4,
                fontWeight: "bold",
              }}
            >
              90%
            </Text>
          </View>
          <ProgressBar
            style={{ height: 13 }}
            progress={0.9}
            color={colors.primaryColor}
          />
        </View>
        <Image style={styles.graf} source={require("../image/slika123.png")} />
        <Text style={{ fontSize: 15, padding: 4, fontWeight: "bold" }}>
          Prosječe dužine Vaših posljednjih vožnji
        </Text>
        <Image style={styles.graf} source={require("../image/slika123.png")} />
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
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
  },
  header: {
    backgroundColor: colors.primaryColor,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 60,
    paddingBottom: 20,
  },
  opcija: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.lightGray,
    padding: 25,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    fontStyle: "italic",
    padding: 10,
  },
  circle: {
    borderRadius: 30,
    backgroundColor: colors.lightGray,
    width: 50,
    height: 50,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  izaberi: {
    padding: 10,
  },
  profil: {
    backgroundColor: colors.secondaryColor,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  graf:{
      alignSelf: "center"
  }
});
export default CurrentDriveScreen;
