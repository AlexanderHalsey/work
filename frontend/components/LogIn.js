import React, { useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { Input } from "react-native-elements";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var handleSubmitSignin = async () => {
    const data = await fetch("http://10.2.2.216:3000/signUp/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `&emailFromFront=${email}&passwordFromFront=${password}`,
    });
    var datajson = await data.json();
    console.log(datajson);

    if (datajson.result == true) {
      AsyncStorage.setItem("token", JSON.stringify(datajson.token));
      props.navigation.navigate("BottomNavigator", { screen: "Dashboard" });
    } else {
      console.log("mot de passe ou email incorrect");
    }
  };

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
      <Text style={{ color: "skyblue", marginTop: 40, fontSize: 20 }}>
        -LogIn-
      </Text>

      <View
        style={{
          marginBottom: -100,
          flexDirection: "row",

          marginBottom: 30,
        }}
      ></View>
      <View style={{ width: 270, marginBottom: -30 }}>
        <Input
          style={{ fontSize: 15 }}
          onChangeText={(value) => setEmail(value)}
          placeholder="email"
        />

        <Input
          style={{ fontSize: 15 }}
          onChangeText={(value) => setPassword(value)}
          placeholder="Mot de passe"
        />
      </View>
      <Pressable
        onPress={() => {
          handleSubmitSignin();
        }}
      >
        <IconFontAwesome5
          name="user-check"
          size={55}
          color="white"
          style={{ margin: 30, marginBottom: -1 }}
        />
      </Pressable>
    </View>
  );
}
export default LogIn;
