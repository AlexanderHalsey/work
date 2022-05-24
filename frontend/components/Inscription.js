import React, { useState } from "react";

import { View, Text, Dimensions, Pressable } from "react-native";
import { Input } from "react-native-elements";

import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from '@expo/vector-icons'; 


import AsyncStorage from "@react-native-async-storage/async-storage";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

function Inscription(props) {
  const [nom, setNom] = useState(props.route.params.name.split(" ")[1]);
  const [prenom, setPrenom] = useState(props.route.params.name.split(" ")[0]);
  const [email, setEmail] = useState(props.route.params.email);
  const [tel, setTel] = useState(props.route.params.phone);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  var handleSubmitSignin = async () => {
    const data = await fetch("http://10.2.2.41:3000/signUp/inscription", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `nomFromFront=${nom}&prenomFromfront=${prenom}&emailFromFront=${email}&telFromFront=${tel}&passwordFromFront=${password}&confPasswordFromFront=${confPassword}`,
    });
    var datajson = await data.json();
    if (datajson.result == true) {
      AsyncStorage.setItem("token", JSON.stringify(datajson.token));
    
      props.navigation.navigate("BottomNavigator", { screen: "Dashboard" });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000B33",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", marginTop: 100 }}>
        Validons vos informations personnelles
      </Text>

      <View style={{ width: 300, marginTop: 100 }}>
        <Input
          style={{ fontSize: 15, color: "white" }}
          onChangeText={(value) => setNom(value)}
          placeholder="Nom"
          value={nom}
        />

        <Input
          style={{ fontSize: 15, color: "white" }}
          onChangeText={(value) => setPrenom(value)}
          placeholder="Prénom"
          value={prenom}
        />

        <Input
          style={{ fontSize: 15, color: "white" }}
          onChangeText={(value) => setEmail(value)}
          placeholder="email"
          value={email}
        />

        <Input
          style={{ fontSize: 15, color: "white" }}
          containerStyle={{marginBottom: 30}}
          onChangeText={(value) => setTel(value)}
          placeholder="Téléphone"
          value={tel}
        />

        <Input
          style={{ fontSize: 15, color: "white" }}
          onChangeText={(value) => setPassword(value)}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          rightIcon={password === confPassword && password !== "" && <AntDesign name="checkcircle" size={24} color="green" />}
        />

        <Input
          style={{ fontSize: 15, color: "white" }}
          onChangeText={(value) => setConfPassword(value)}
          placeholder="Confirmer votre mot de passe"
          secureTextEntry={true}
          value={confPassword}
          rightIcon={password === confPassword && password !== "" && <AntDesign name="checkcircle" size={24} color="green" />}
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
        />
      </Pressable>
    </View>
  );
}
export default Inscription;
