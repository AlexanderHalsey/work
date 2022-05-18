import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-elements";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function Inscription() {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", backgroundColor: "green" }}
    >
      <View>
        <Image
          source={require("../assets/logoWork.png")}
          style={{
            width: 250,
            height: 250,
          }}
        />
      </View>

      <Button
        buttonStyle={{
          backgroundColor: "#000B33",
          width: deviceWidth * 0.8,
          height: "20%",
          marginTop: 220,
          borderRadius: 10,
        }}
        containerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        title="S'inscrire en 1 minute avec votre CV"
      />
      <Button
        buttonStyle={{
          backgroundColor: "#000B33",
          width: deviceWidth * 0.8,
          height: deviceWidth * 0.1,
          borderRadius: 20,
        }}
        containerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        title="Se connecter"
      />
    </View>
  );
}
