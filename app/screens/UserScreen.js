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

import Plus from "../svg/plus-svgrepo-com.svg";
import Bell from "../svg/notification-svgrepo-com copy.svg";
import User from "../svg/profile-svgrepo-com copy.svg";
import Star from "../svg/star-svgrepo-com.svg";

const colors = require("../color/colors.json");
const opcije = [
  { id: 1, voznja: "Grand Hotel", vrijeme: "07:00" },
  { id: 2, voznja: "Trg Heroja", vrijeme: "16:34" },
  { id: 3, voznja: "Review - Hamo Mirzić", vrijeme: "12:41" },
  { id: 4, voznja: "Skenderija", vrijeme: "21:21" },
  { id: 5, voznja: "Grand Hotel", vrijeme: "07:00" },
  { id: 6, voznja: "Trg Heroja", vrijeme: "16:34" },
  { id: 7, voznja: "Review - Hamo Mirzić", vrijeme: "12:41" },
  { id: 8, voznja: "Skenderija", vrijeme: "21:21" },
  { id: 9, voznja: "Grand Hotel", vrijeme: "07:00" },
  { id: 10, voznja: "Trg Heroja", vrijeme: "16:34" },
  { id: 11, voznja: "Review - Hamo Mirzić", vrijeme: "12:41" },
  { id: 12, voznja: "Skenderija", vrijeme: "21:21" },
  { id: 13, voznja: "Grand Hotel", vrijeme: "07:00" },
  { id: 14, voznja: "Trg Heroja", vrijeme: "16:34" },
  { id: 15, voznja: "Review - Hamo Mirzić", vrijeme: "12:41" },
  { id: 16, voznja: "Skenderija", vrijeme: "21:21" },
];

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.white }}>
          Korisnički profil
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
        <View style={styles.profil}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.primaryColor,
              borderRadius: 70,
              width: 80,
              height: 80,
            }}
          >
            <User width={50} height={50} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Meho Mehić</Text>
          <Text>Sarajevo, BiH</Text>
          <View style={{ flexDirection: "row", margin: 10, marginTop: 70 }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primaryColor,
                borderRadius: 10,
                padding: 15,
                marginRight: 7,
              }}
            >
              <Text style={{ color: colors.white }}>Zaprati</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondaryColor,
                borderRadius: 10,
                padding: 15,
                borderColor: colors.primaryColor,
                borderWidth: 1,
                marginLeft: 7,
              }}
            >
              <Text style={{ color: colors.primaryColor }}>Poruka</Text>
            </TouchableOpacity>
          </View>
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
                <View style={{flexDirection: "row"}}>
                  <Text
                    style={{ color: colors.primaryColor, fontWeight: "bold", paddingRight: 10 }}
                  >{`${x.vrijeme}`}</Text>
                  <Text style={{fontSize: 15}}>{`${x.voznja}`}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", width: "20%"}}>
                    <Star width={20} height={20}/>
                    <View style={{backgroundColor: colors.darkGray, width: 20, height: 20, borderRadius: 50}}/>
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
    height: 80,
    backgroundColor: colors.lightGray,
    padding: 25,
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
  profil: {
    backgroundColor: colors.secondaryColor,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
});
export default UserScreen;
