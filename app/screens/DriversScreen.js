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

import Check from "../svg/check-mark-svgrepo-com.svg";
import Clock from "../svg/clock-svgrepo-com.svg";
import Plus from "../svg/plus-svgrepo-com.svg";
import Bell from "../svg/notification-svgrepo-com copy.svg";

const colors = require("../color/colors.json");
const opcije = [
  { id: 1, auto: "Toyota Camry", vozac: "Hamza Isić" },
  { id: 2, auto: "Volskwagen Polo", vozac: "Adnan Hodžić" },
  { id: 3, auto: "Honda Civic", vozac: "Admir Ihrijarević" },
  { id: 4, auto: "Hyundai Tucson", vozac: "Evelin Piljug" },
  { id: 5, auto: "Rolls-Royce", vozac: "Amira Kunalić" },
  { id: 6, auto: "Toyota Camry", vozac: "Hamza Isić" },
  { id: 7, auto: "Volskwagen Polo", vozac: "Adnan Hodžić" },
  { id: 8, auto: "Honda Civic", vozac: "Admir Ihrijarević" },
  { id: 9, auto: "Hyundai Tucson", vozac: "Evelin Piljug" },
  { id: 10, auto: "Rolls-Royce", vozac: "Amira Kunalić" },
  { id: 11, auto: "Toyota Camry", vozac: "Hamza Isić" },
  { id: 12, auto: "Volskwagen Polo", vozac: "Adnan Hodžić" },
  { id: 13, auto: "Honda Civic", vozac: "Admir Ihrijarević" },
  { id: 14, auto: "Hyundai Tucson", vozac: "Evelin Piljug" },
  { id: 15, auto: "Rolls-Royce", vozac: "Amira Kunalić" },
];

const DriversScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.white }}>
          Vožnje u blizini
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Map")} style={styles.izaberi}>
            <Plus width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.izaberi}>
            <Bell width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: 15,
          height: "80%",
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
          backgroundColor: colors.secondaryColor,
        }}
      >
        <View style={styles.izaberiVozaca}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Odabir vozača
          </Text>
        </View>
        <ScrollView
          style={{
            width: "90%",
            marginLeft: 15,
            marginTop: 15,
          }}
        >
          {opcije.map((x) => {
            return (
              <TouchableOpacity key={`t${x.id}`} style={styles.opcija}>
                <View style={{ justifyContent: "space-between" }}>
                  <Text>{`${x.auto}`}</Text>
                  <Text style={{ color: colors.black }}>{`${x.vozac}`}</Text>
                  <Text style={{ color: colors.primaryColor }}>Dostupan!</Text>
                </View>
                <View style={{ height: "100%", padding: 10, paddingEnd: 0 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      height: "100%",
                    }}
                  >
                    <Clock width={20} height={20} />
                    <Text>{` ${x.id} Min`}</Text>
                  </View>
                  <View
                    style={{
                      borderRadius: 50,
                      backgroundColor: colors.primaryColor,
                      width: 20,
                    }}
                  >
                    <Check width={20} height={20} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* za bottom meni */}
      <View style={{ position: "absolute", bottom: 0 }}>
        <MenuBar
          navigation={navigation}
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
    flexDirection: "row",
    width: "90%",
    height: 100,
    backgroundColor: colors.lightGray,
    padding: 25,
    borderLeftWidth: 10,
    borderLeftColor: colors.primaryColor,
    justifyContent: "space-between",
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
  izaberiVozaca: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
export default DriversScreen;
