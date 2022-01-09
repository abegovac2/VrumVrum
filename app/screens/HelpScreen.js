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
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const colors = require("../color/colors.json");

const HelpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>

                <View >
                    <Back width={20} height={20} color={colors.black}></Back>
                </View>
                <Text style={{ fontWeight: 'bold' }}>
                    Pomoć
                </Text>
                <View>
                    <Menu width={20} height={20} color={colors.black}></Menu>
                </View>
            </View>

        <View style={{flex:9}}>
            <View style={{ padding: '5%' }}>
                <Info width={300} height={200} />
            </View>

            <View style={{ flex: 5, width: "80%" }}>
                <View style={styles.forma}>
                    <Text style={{ textAlign: "center", padding: 5 }}>
                        Trebate pomoć?
                    </Text>
                    <Text style={{ textAlign: "center", padding: 5 }}>
                        Javite se našim operaterima
                    </Text>
                    <TextInput
                        placeholder="Upišite vaše pitanje ovde"
                        style={styles.unos}
                        autoFocus={true}
                    ></TextInput>
                </View>

                <View style={styles.dugme}>
                    <TouchableOpacity >
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
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 20,
        height: '20%',
        paddingTop: 100,
        backgroundColor: colors.primaryColor,
        alignItems: "center",
        alignContent: "space-around",
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 25,

    },
    dugme: {
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
        margin: 3,
        backgroundColor: colors.primaryColor,
    },

    unos: {
        backgroundColor: colors.white,
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        borderColor: colors.black,
        borderWidth: 1,
        height: 120,
    },
});
export default HelpScreen;
