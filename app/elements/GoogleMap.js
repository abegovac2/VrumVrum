import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';

const colors = require("../color/colors.json");

const GoogleMap = ({ content }) => {
  return (
      <MapView style={styles.mapa}
        initialRegion={{
            latitude: 43.85621660390077,
            longitude: 18.395996867755283,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      />
  );
};

const styles = StyleSheet.create({
    mapa:{
        flex:1,
        width: "100%",
        height:"100%",
    }
});

export default GoogleMap;
