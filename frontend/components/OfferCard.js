import React, { useState, useEffect } from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  NativeBaseProvider,
  Box,
  Actionsheet,
  Button,
  useDisclose,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Center,
} from "native-base";

function OfferCard(props) {
  // on enregistre la dimension de l'écran de l'utilisateur
  const { height, width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        width: width * 0.9,
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0,
        elevation: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 8,
        marginTop: 10,
      }}
    >
      <Image
        source={{
          uri: props.logoImage,
        }}
        style={{ width: width * 0.15, height: width * 0.15 }}
      />

      <View
        style={{
          flexDirection: "column",
          height: width * 0.2,
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <Text style={{ color: "grey" }}>{props.company}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {props.jobTitle}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "grey" }}>
            {Math.floor(props.salary * 151.67)} € /Mois
          </Text>
          <Text style={{ color: "grey" }}>{props.location} </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: width * 0.2,
        }}
      >
        <View
          style={{
            width: width * 0.08,
            height: width * 0.08,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FAFAFA",
          }}
        >
          <Icon
            name="heart"
            size={18}
            color="red"
            style={{ marginRight: 5, marginLeft: 4 }}
          />
        </View>
        <Text style={{ color: "grey" }}>{props.distance} km</Text>
      </View>
    </TouchableOpacity>
  );
}

export default OfferCard;
