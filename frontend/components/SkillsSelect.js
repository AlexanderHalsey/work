// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/

// import React in our code
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
// import SearchableDropdown component
import SearchableDropdown from "react-native-searchable-dropdown";

// Item array for the dropdown
const items = [
  // name key is must. It is to show the text in front
  { id: 1, name: "Android Developer" },
  { id: 2, name: "IT Technician" },
  { id: 3, name: "Web Deveoper" },
];

export const App = (props) => {
  // console.log(selectedItems)
  // Data Source for the SearchableDropdown
  const [serverData, setServerData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  // const [name, setName] = useState('')
  // useEffect(() => {
  //   const joblist = async function loadData() {
  //     var rawJob = await fetch("https://10.2.1.38:3000/skills");
  //     var jobData = await rawJob.json();

  //     var temp = jobData.skills.map((e,key) => ({id:key,name: e.job_title}));
  //     // var temp = jobData.skills.map(e => ({name: e.job_title}));

  //     console.log(jobData);
  //     // var items = jobData.skills.map((e,key) => ({ id:key.toString() , name: e.job_title.toLowerCase() }));
  //     // const items = jobData.skills.map((e, key) => {
  //     //   return {
  //     //     id: key.toString(),
  //     //     name: e.job_title,
  //     //   };
  //     // });
  //     setServerData(temp);
  //   };
  //   joblist();
  //   console.log("show server data", serverData);
  // }, []);

  useEffect(() => {
    fetch("https://aboutreact.herokuapp.com/demosearchables.php")
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response from the API Call
        //console.log(responseJson);
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

  // useEffect(() => {
  //   async function fetchEmployees() {
  //     const response = await fetch('/employees');
  //     const fetchedEmployees = await response.json(response);
  //     setEmployees(fetchedEmployees);
  //   }
  //   fetchEmployees();
  // }, []);
  // return (
  //   <div>
  //     {employees.map(name => <div>{name}</div>)}
  //   </div>
  // );

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
          // Change listner on the searchable input

          onItemSelect={(item) => {
            console.log("on item selected :", item.name);
            setToggle(true);
            //  items.push({name:item.name})
            addbuttonHandler(item);
            
            // disabled= "false"
            // onPress={addbuttonHandler}
            // alert(JSON.stringify(item))
          }}
          // Called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          // Suggestion container style
          textInputStyle={{
            // Inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            backgroundColor: "#FAF7F6",
          }}
          itemStyle={{
            // Single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: "#FAF9F8",
            borderColor: "#bbb",
            borderWidth: 1,
          }}
          itemTextStyle={{
            // Text style of a single dropdown item
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
        <View>
          {/* <Button
            onPress={addbuttonHandler}
            title={"Add items"}
            // disabled= "false"
          /> */}
        </View>
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
