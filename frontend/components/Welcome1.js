import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function Welcome1(props) {
  useEffect(() => {
    // dans le future on verifiera dans le backend si la persone qui lance l'appli a une compte deja

    // si oui - on "set" user a true
    AsyncStorage.getItem("token", function (error, value) {
      console.log(value);

      if (value !== null) {
        console.log("token local storage app", value);
        props.navigation.navigate("BottomNavigator", { screen: "Dashboard" });
      } else {
        console.log("pas de token trouvé dans le localstorage");
      }
    });

    // si non - on "set" user a false
  }, []);

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
        <Button
          onPress={() => {
            props.navigation.navigate("Register");
          }}
          buttonStyle={{
            backgroundColor: "#000B33",
            width: deviceWidth * 0.8,

            marginTop: 220,
            borderRadius: 15,
            padding: 10,
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
            marginTop: 15,
            borderRadius: 15,
            padding: 10,
          }}
          containerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Se connecter"
          onPress={() => props.navigation.navigate("LogIn")}
        />
      </View>
      <Text style={{ alignItems: "center", marginTop: 50, margin: 40 }}>
        {"- Se connecter avec - "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/googleLogo.png")}
          style={{ width: 50, height: 50, margin: 10 }}
        />
        <Image
          source={require("../assets/facebookLogo.png")}
          style={{ width: 50, height: 50, margin: 10 }}
        />
      </View>
      <Text style={{ alignItems: "center", marginBottom: -50, marginTop: 50 }}>
        {"Nouveau ? Créer un compte "}
      </Text>
      <Image
        resizeMode="contain"
        source={require("../assets/homme.png")}
        style={{
          height: deviceHeight * 0.5,
          marginTop: 20,
        }}
      />
    </View>
  );
}
