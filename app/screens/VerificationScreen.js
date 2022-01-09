import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

import CarImage from "../svg/undraw_city_driver_re_0x5e.svg";
const colors = require("../color/colors.json");

const VerificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.zaglavlje}>
        <TouchableOpacity>
          <Text style={styles.text}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Verifikacija računa</Text>
      </View>
      <View style={styles.sadrzaj}>
        <Text style={styles.text}>Unesite kod poslan na Vaš broj!</Text>
        <View style={styles.forma}>
          <TextInput
            style={styles.unos}
            autoFocus={true}
            keyboardType={"decimal-pad"}
          ></TextInput>
          <View>
            <View style={[styles.dugme, styles.crnoD]}>
              <TouchableOpacity>
                <Text style={{ color: colors.secondaryColor }}>
                  Pošalji Kod
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.dugme, styles.bijeloD]}>
              <TouchableOpacity>
                <Text>Ponovo slanje na broj</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  zaglavlje: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sadrzaj: {
    flex: 6,
    backgroundColor: colors.primaryColor,
    borderTopRightRadius: 100,
    padding: 30,
  },
  forma: {
    flex: 0.45,
    backgroundColor: colors.white,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  unos: {
    backgroundColor: colors.darkGray,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
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
  },
  text: { alignSelf: "center", padding: 40, fontWeight: "bold", fontSize: 15 },
});
export default VerificationScreen;
