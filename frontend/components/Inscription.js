import React, { useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { Input } from "react-native-elements";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

function Inscription(props) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  var handleSubmitSignin = async () => {
    const data = await fetch("http://localhost:3000/signUp/inscription", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `nomFromFront=${nom}&prenomFromfront=${prenom}&emailFromFront=${email}&passwordFromFront=${password}&confPasswordFromFront=${confPassword}`,
    });
    var datajson = await data.json();
    console.log(datajson);
    props.navigation.navigate("");
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
      <Text style={{ color: "white", marginTop: 40 }}>
        Validons vos informations personnelles
      </Text>

      <View
        style={{
          marginBottom: -100,
          flexDirection: "row",

          marginBottom: 30,
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <IconFontAwesome5
            name="male"
            color="white"
            size={50}
            style={{ margin: 50 }}
          />
          <Text style={{ color: "skyblue" }}>Homme</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <IconFontAwesome5
            name="female"
            color="white"
            size={50}
            style={{ margin: 50 }}
          />
          <Text style={{ color: "skyblue" }}>Femme</Text>
        </View>
      </View>
      <View style={{ width: 270, marginBottom: -30 }}>
        <Input
          style={{ fontSize: 15 }}
          onChangeText={(value) => setNom(value)}
          placeholder="Nom"
        />

        <Input
          style={{ fontSize: 15 }}
          onChangeText={(value) => setPrenom(value)}
          placeholder="Prénom"
        />

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

        <Input
          style={{ fontSize: 15 }}
          onChangeText={(value) => setConfPassword(value)}
          placeholder="Confirmer votre mot de passe"
          secureTextEntry={true}
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
export default Inscription;
