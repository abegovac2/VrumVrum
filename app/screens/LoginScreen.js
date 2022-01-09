import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import BlackButton from "../elements/BlackButton";

import Facebook from "../svg/facebook-svgrepo-com.svg";
const colors = require("../color/colors.json");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../image/logo.png")} />
      {/*<Text style={{ flex: 1, padding: 50 }}>Logo</Text>*/}
      <Text style={{ flex: 0.5, fontSize: 30, fontWeight: "bold", padding: 5 }}>
        Login
      </Text>
      <View style={{ flex: 5, width: "80%" }}>
        <View style={styles.forma}>
          <Text style={{ textAlign: "center", padding: 5 }}>
            Logujte se u svoj račun
          </Text>
          <TextInput
            placeholder="Korisničko ime"
            style={styles.unos}
            autoFocus={true}
          ></TextInput>
          <TextInput
            placeholder="Password"
            style={styles.unos}
            autoFocus={true}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <View style={{ flex: 3 }}>
          <BlackButton content={"Login"} onClick={() => navigation.navigate("User")}></BlackButton>
          <Text style={{ textAlign: "center", padding: 5 }}>Nemate račun?</Text>
          <BlackButton content={"Prijavite se"} onClick={() => navigation.navigate("Verification")}></BlackButton>
          <View
            style={[styles.dugme, styles.bijeloD, { alignItems: "flex-start" }]}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
              }}
            >
              <View>
                <Facebook width={20} height={20} />
              </View>
              <Text style={{ textAlign: "center", width: "90%" }}>
                Prijavite se sa Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "space-around",
    backgroundColor: colors.primaryColor,
    flex: 1,
    width: "100%",
  },
  dugme: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    margin: 3,
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
  logo: {
    width: "60%",
    height: "30%",
  },
});
export default HomeScreen;
