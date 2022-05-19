import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.me}>
        <Text style={styles.itemText}>Bonjour Maxine</Text>
        <Image style={styles.image} source={require("../assets/girl.jpg")} />
      </View>

      <View style={styles.rowContainer}>
        <Pressable onPress={() => props.navigation.navigate("ListOffers")}>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={60}
              color="#B9FFFF"
            />
            <Text style={styles.itemText}>Liste annonce</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => props.navigation.navigate("MyLikes")}>
          <View style={styles.itemContainer}>
            <Feather name="list" size={60} color="#B9FFFF" />
            <Text style={styles.itemText}>A etudier</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.rowContainer}>
        <Pressable onPress={() => props.navigation.navigate("MyDocuments")}>
          <View style={styles.itemContainer}>
            <Ionicons
              name="document-attach-outline"
              size={60}
              color="#B9FFFF"
            />
            <Text style={styles.itemText}>Mes documents</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => props.navigation.navigate("PersonalInfo")}>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              name="account-details-outline"
              size={60}
              color="#B9FFFF"
            />
            <Text style={styles.itemText}>Info personnel</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.rowContainer}>
        <Pressable onPress={() => props.navigation.navigate("Skills")}>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={60}
              color="#B9FFFF"
            />
            <Text style={styles.itemText}>Skills</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => props.navigation.navigate("MyMissions")}>
          <View style={styles.itemContainer}>
            <Feather name="briefcase" size={60} color="#B9FFFF" />
            <Text style={styles.itemText}>Mission</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000b33",
  },
  me: {
    marginTop: 50,
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 150,
    marginTop: 10,
    marginBottom: 60,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    borderRadius: 15,
    height: 110,
    margin: 4,
    borderWidth: 2,
    borderColor: "#B9FFFF",
  },
  itemText: {
    color: "#B9FFFF",
  },
});
