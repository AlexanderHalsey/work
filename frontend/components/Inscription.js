import React from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Fontisto } from "@expo/vector-icons";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function Inscription(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000B33",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 300 }}>
        <Text style={{ color: "white" }}>
          Validons vos informations personnelles
        </Text>
        <View style={{ flexDirection: "row", marginBottom: -100 }}>
          <IconFontAwesome5
            name="male"
            color="white"
            size={70}
            style={{ margin: 50 }}
          />

          <IconFontAwesome5
            name="female"
            color="white"
            size={70}
            style={{ margin: 50 }}
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <Text style={{ color: "skyblue", margin: 50, marginRight: 10 }}>
            Homme
          </Text>
          <Text style={{ color: "skyblue", margin: 50 }}>Femme</Text>
        </View>
        <Input placeholder="BASIC INPUT" />

        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
        />

        <Input
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />

        <Input
          placeholder="Comment"
          leftIcon={{ type: "font-awesome", name: "comment" }}
          style={styles}
          onChangeText={(value) => this.setState({ comment: value })}
        />

        <Input
          placeholder="INPUT WITH ERROR MESSAGE"
          errorStyle={{ color: "red" }}
          errorMessage="ENTER A VALID ERROR HERE"
        />

        <Input placeholder="Password" secureTextEntry={true} />
      </View>
    </View>
  );
}
