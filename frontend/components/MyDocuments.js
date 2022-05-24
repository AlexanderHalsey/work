import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MyContracts from "./MyContracts";
import MyPayslips from "./MyPayslips";
import MyOtherDocuments from "./MyOtherDocuments";
import MyWorkCertificates from "./MyWorkCertificates";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function MyDocuments(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <IconFontAwesome
        name="file-text-o"
        color="white"
        size={50}
        style={{ marginTop: 100, marginBottom: -30, color: "#000B33" }}
      />
      <Text style={{ marginTop: 50, color: "#000B33" }}>Mes Documents</Text>
      <View style={{ justifyContent: "flex-start" }}>
        <View
          style={{ flexDirection: "row", marginBottom: -50, color: "#000B33" }}
        >
          <IconFontAwesome
            name="file-pdf-o"
            size={50}
            style={{ marginTop: 80 }}
          />
          <Text style={{ marginTop: 100, marginLeft: 50 }}>
            Mes contrats de travail
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginBottom: -50, color: "#000B33" }}
        >
          <IconFontAwesome
            name="file-pdf-o"
            size={50}
            style={{ marginTop: 80 }}
          />
          <Text style={{ marginTop: 100, marginBottom: 20, marginLeft: 50 }}>
            Mes bulletins de salaire
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginBottom: -50, color: "#000B33" }}
        >
          <IconFontAwesome
            name="file-pdf-o"
            size={50}
            style={{ marginTop: 80 }}
          />
          <Text style={{ marginTop: 100, marginBottom: 20, marginLeft: 50 }}>
            Mes certificats de travail
          </Text>
        </View>
        <View style={{ flexDirection: "row", color: "#000B33" }}>
          <IconFontAwesome
            name="file-pdf-o"
            size={50}
            style={{ marginTop: 80 }}
          />
          <Text style={{ marginTop: 100, marginBottom: 20, marginLeft: 50 }}>
            Autres documents
          </Text>
        </View>
      </View>
    </View>
  );
}
