import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const colors = require("../color/colors.json");


const BlackButton = ({ content }) => {
    return (
        <View style={[styles.dugme, styles.crnoD]}>
            <TouchableOpacity>
              <Text style={{ color: colors.secondaryColor }}>{content}</Text>
            </TouchableOpacity>
          </View>
    )
}

const styles = StyleSheet.create({
    dugme: {
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
        margin: 3,
      },
      crnoD: {
        backgroundColor: colors.black,
      },
})

export default BlackButton;
