import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import Accordion from "../components/AccordionSelect";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";
import { Center } from "native-base";

import DropDownList from "./DropDownList";

export default function SkillsSelect() {
    const [dataStatus, setDataStatus] = useState("loading...");
    const [searching, setSearching] = useState(0);
    const [skillsList, setSkillsList] = useState(" ");
    const [dataSource] = useState(['Android Developer','IT Technician','Web Deveoper','UI Designer'])
    const [filter, setFilter] = useState(dataSource)

    const onSearch=(text)=> {

      if(text) {
          setSearching(true);
          const temp =text.toLowerCase();

        const tempList = dataSource.filter(item=>{
        if (item.match(temp)) 
        return item
      })
      setFilter(tempList)
      }
      else {
        setSearching(false)
      }


  useEffect(() => {

    const joblist= async function loadData() {
            var rawJob = await fetch('https://localhost:3000/skillsSelect');
            var jobData = await rawJob.json();
            console.log(jobData)
            setDataStatus("datas loaded: "+ jobData[0].name+"...");
    }
    joblist()
  }, []);


  // 
  //   "Android Developer",
  //   "IT Technician",
  //   "Web Deveoper",
  //   "UI Designer",
  // ]);



  const onSearch = (text) => {
    if (text) {
      console.log("text ", text);
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = dataSource.filter((item) => {
        console.log("item", item);
        if (item.toLowerCase().match(temp)) return true;
      });
      console.log("templist ", tempList);
      setFilter(tempList);
    } else {
      setSearching(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 40,
        }}
      >
        <MaterialCommunityIcons name="lightning-bolt" size={60} color="black" />
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
            En répondant aux questions du formulaire ci-dessous, vos critères de
            recherche vont s’affiner automatiquement. Si vous avez importé votre
            CV, certaines informations sont déjà remplies !
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          fontWeight: "bold",
        }}
      >
        <Text>Quel métier recherchez-vous ?</Text>
      </View>

      <View>
        <Text style={{ marginTop: 20, marginLeft: 60, marginBottom: 0 }}>
          Métier
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.txtinput}
          placeholder="Entrer un métier"
          placeholderTextColor={{ color: "black" }}
          onChangeText={onSearch}
        />

        {<DropDownList options={filter}/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
  },
  txtinput: {
    backgroundColor: "white",
    width: "70%",
    height: 40,
    justifyContent: "center",
    marginTop: -20,
    marginBottom: 350,
    marginLeft: 0,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
