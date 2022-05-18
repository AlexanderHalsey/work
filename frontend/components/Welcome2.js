import React from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function Welcome2(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <Image
        resizeMode="contain"
        source={require("../assets/logoWork.png")}
        style={{
          width: 250,
          height: 250,
          marginBottom: -250,
        }}
      />

      <View>
        <Text style={{ alignItems: "center", marginTop: 250 }}>
          {"Importer votre CV "}
        </Text>
      </View>

      <Text style={{ alignItems: "center", marginTop: 50 }}>
        {"- Se connecter avec - "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <IconFontAwesome
          name="camera"
          size={55}
          color="#000B33"
          style={{ margin: 30 }}
        />
        <Image
          source={require("../assets/facebookLogo.png")}
          style={{ width: 50, height: 50, margin: 30 }}
        />
      </View>
      <Text
        style={{
          alignItems: "center",
          marginBottom: -50,
          marginTop: 50,
          width: deviceWidth * 0.8,
        }}
      >
        {
          "Nous allons récupérer les informations  de votre CV afin de vous éviter de les saisir."
        }
      </Text>
      <Image
        resizeMode="contain"
        source={require("../assets/femme.png")}
        style={{
          height: deviceHeight * 0.5,
          marginTop: 260,
        }}
      />
    </View>
  );
}
