import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import BlackButton from "../elements/BlackButton";

import MenuBar from "../elements/MenuBar";
import Menu from "../svg/menu-svgrepo-com (1).svg";
import Back from "../svg/back-svgrepo-com.svg";
import Info from "../svg/undraw_online_test_gba7.svg";
import Facebook from "../svg/facebook-svgrepo-com.svg";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const colors = require("../color/colors.json");

const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View>
          <Back width={20} height={20} color={colors.black}></Back>
        </View>
        <Text style={{ fontWeight: "bold" }}>Pomoć</Text>
        <View>
          <Menu width={20} height={20} color={colors.black}></Menu>
        </View>
      </View>

      <View style={ {width: "90%"} }>

        <View style={{ alignSelf: "center" }}>
          <Info width={300} height={200} />
        </View>

        <View style={{ width: "100%", alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              padding: 5,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Trebate pomoć?
          </Text>
          <Text
            style={{
              textAlign: "center",
              padding: 5,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Javite se našim operaterima
          </Text>
          <View style={styles.forma}>
            <TextInput
              placeholder="Upišite vaše pitanje ovde"
              style={styles.unos}
              autoFocus={true}
            ></TextInput>
          </View>

          <View style={styles.dugme}>
            <TouchableOpacity>
              <Text style={{ color: colors.secondaryColor }}>Pošalji</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    alignContent: "space-around",
    backgroundColor: colors.white,
    flex: 1,
    width: "100%",
  },
  nav: {
    backgroundColor: colors.primaryColor,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
  },
  dugme: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    margin: 3,
    backgroundColor: colors.primaryColor,
  },
  unos: {
    padding: "20%",
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  forma: {
    width: "100%",
  },
});
export default HelpScreen;
