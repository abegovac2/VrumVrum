import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import MenuBar from "../elements/MenuBar";

import Back from "../svg/back-svgrepo-com.svg";
import Save from "../svg/save-svgrepo-com.svg";

import Lock from "../svg/lock-svgrepo-com.svg";
import Paper from "../svg/news-paper-news-svgrepo-com.svg";
import Help from "../svg/help-svgrepo-com.svg";
import Pen from "../svg/pen-svgrepo-com.svg";
import Dollar from "../svg/dollar-svgrepo-com.svg";
import Bell from "../svg/notification-svgrepo-com.svg";
import Profile from "../svg/profile-svgrepo-com.svg";

const colors = require("../color/colors.json");
const dim = { w: 20, h: 20 };
const opcije = [
  { id: 1, slika: <Lock width={dim.w} height={dim.h} />, text: "Privatnost" },
  {
    id: 2,
    slika: <Paper width={dim.w} height={dim.h} />,
    text: "Odredbe i uslovi",
  },
  { id: 3, slika: <Help width={dim.w} height={dim.h} />, text: "Pomoć" },
  {
    id: 4,
    slika: <Pen width={dim.w} height={dim.h} />,
    text: "Ostavljanje recenzije",
  },
  {
    id: 5,
    slika: <Dollar width={dim.w} height={dim.h} />,
    text: "Historija plaćanja",
  },
  { id: 6, slika: <Bell width={dim.w} height={dim.h} />, text: "Notifikacije" },
  {
    id: 7,
    slika: <Profile width={dim.w} height={dim.h} />,
    text: "Korisnički račun",
  },
];

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Back width={20} height={20} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Postavke računa
        </Text>
        <TouchableOpacity>
          <Save width={20} height={20} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ width: "90%", marginLeft: 15, marginTop: 15 }}>
        {opcije.map((x) => {
          return (
            <TouchableOpacity key={`t${x.id}`} style={styles.opcija}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.circle}>{x.slika}</View>
                <Text style={styles.text} key={`tt${x.id}`}>
                  {x.text}
                </Text>
              </View>
              <View style={{ padding: 10 }}>
                <Back
                  width={dim.h}
                  height={dim.w}
                  style={{ transform: [{ rotateY: "180deg" }] }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
    backgroundColor: colors.secondaryColor,
  },
  header: {
    backgroundColor: colors.primaryColor,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 50,
  },
  opcija: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: colors.secondaryColor,
    padding: 10,
    borderColor: colors.lightGray,
    borderBottomWidth: 2,
    justifyContent: "space-between",
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
});
export default SettingsScreen;
