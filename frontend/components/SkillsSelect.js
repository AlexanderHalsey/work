import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";
import { Center } from "native-base";

import SearchableDropdown from "react-native-searchable-dropdown";


const items = [

  { id: 1, name: "Android Developer" },
  { id: 2, name: "IT Technician" },
  { id: 3, name: "Web Deveoper" },
];

export const App = (props) => {

  const [serverData, setServerData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetch("http://10.2.2.41:3000/skillList")
      .then((response) => response.json())
      .then((responseJson) => {
        setServerData(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addbuttonHandler = (item) => {
    let dest = [item, ...selectedItems];
    setSelectedItems(dest);
    // const newitemtosendtoback = dataBackend.find(el => el.job_title === item.name)

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 40,
          }}
        >
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={60}
            color="black"
          />
          <Text style={{ fontWeight: "bold" }}>Métiers & Compétence</Text>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#B9FFFF",
          }}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, backgroundColor: "#B9FFFF" }}
              source={require("../assets/icon.jpg")}
            />
          </View>
          <View style={{ marginLeft: 20, marginRight: 150, marginTop: 0 }}>
            <Text>
              En répondant aux questions du formulaire ci-dessous, vos critères
              de recherche vont s’affiner automatiquement. Si vous avez importé
              votre CV, certaines informations sont déjà remplies !
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
          }}
        >
          <Text style={styles.titleText}>Quel métier recherchez-vous ?</Text>
        </View>
        <View>
          <Text style={styles.headingText}>Métier</Text>
        </View>

        <SearchableDropdown
          multi={true}
          onTextChange={(text) => console.log(text)}
          onItemSelect={(item) => {
            addbuttonHandler(item);
          }}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            backgroundColor: "#FAF7F6",
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: "#FAF9F8",
            borderColor: "#bbb",
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: "#222",
            padding: 10,
            marginTop: 2,
            backgroundColor: "#ddd",
            borderColor: "#bbb",
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemsContainerStyle={{
            // Items container style you can pass maxHeight
            // To restrict the items dropdown hieght
            maxHeight: "50%",
          }}
          items={serverData}
          // Mapping of item arrayskills.
          defaultIndex={2}
          // Default selected item index
          placeholder="Enter métier"
          // Place holder for the search input
          resetValue={false}
          // Reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          // To remove the underline from the android input
        />
      </View>
      {selectedItems.map((item, key) => {
        return (
          <TouchableOpacity key={key} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 8,
  },
  appButtonContainer: {
    elevation:5,
    backgroundColor: "#000B33",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:5,
    marginBottom:4
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
