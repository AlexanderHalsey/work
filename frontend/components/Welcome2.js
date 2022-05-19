import React from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import { Dimensions } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

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

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconFontAwesome
            name="camera"
            size={55}
            color="#000B33"
            style={{ margin: 30 }}
          />
          <Text style={{ fontSize: 12, width: deviceWidth * 0.2 }}>Photo</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <IconFontAwesome5
            name="file-export"
            size={55}
            color="#000B33"
            style={{ margin: 30 }}
          />
          <Text
            onPress={() => {
              props.navigation.navigate("CvPopOver");
            }}
            style={{ fontSize: 12, width: deviceWidth * 0.2 }}
          >
            Upload
          </Text>
        </View>
      </View>
      <Text
        style={{
          alignItems: "center",
          marginBottom: -50,
          marginTop: 40,
          width: deviceWidth * 0.8,
        }}
      >
        {
          "Nous allons récupérer les informations  de votre CV afin de vous éviter de les saisir"
        }
      </Text>
      <Image
        resizeMode="contain"
        source={require("../assets/femme.png")}
        style={{
          height: deviceHeight * 0.5,
          marginTop: 30,
        }}
      />
    </View>
  );
}
