import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import { useDisclose, Center } from "native-base";
import { Button } from "react-native-elements";

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  View,
  Text,
  Image,
} from "react-native";

export default function ScreenOffer(props) {
  console.log("id dans screen Offer", props.route.params.offerId);
  const [offerData, setOfferData] = useState(null);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    console.log("props: ", props.route.params.offerId);
    const findOffers = async () => {
      // console.log(isFocused);
      console.log("dans useEffect ScreenOffer");
      const data = await fetch(
        `http://10.2.2.41:3000/offers/displayOffer?offerId=${props.route.params.offerId}`
      );
      const body = await data.json();
      console.log("body dans ScreenOffer", body.offer);
      setOfferData(body.offer);
    };

    findOffers();
  }, []);

  const viewSkills =
    offerData &&
    offerData.jobs[0].skills.map((skill, i) => {
      return (
        <View style={styles.viewskills} key={i}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#000B33" }}>
            Compétences : {skill.skill_title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18 }}>Aisance : </Text>
            <>
              <AntDesign
                name="star"
                size={24}
                color={skill.level > 0 ? "#FFF500" : "#FFFFFF"}
              />
              <AntDesign
                name="star"
                size={24}
                color={skill.level > 1 ? "#FFF500" : "#FFFFFF"}
              />
              <AntDesign
                name="star"
                size={24}
                color={skill.level > 2 ? "#FFF500" : "#FFFFFF"}
              />
            </>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18 }}>Expérience : </Text>
            <>
              <AntDesign
                name="star"
                size={24}
                color={skill.experience > 0 ? "#FFF500" : "#FFFFFF"}
              />
              <AntDesign
                name="star"
                size={24}
                color={skill.experience > 1 ? "#FFF500" : "#FFFFFF"}
              />
              <AntDesign
                name="star"
                size={24}
                color={skill.experience > 2 ? "#FFF500" : "#FFFFFF"}
              />
            </>
          </View>
        </View>
      );
    });

  return (
    <View style={styles.principal}>
      {/* header */}

      <View style={styles.header}>
        <Image
          source={{
            uri: screenDisplay.logo,
          }}
          style={{ width: width * 0.25, height: width * 0.25 }}
        />
      </View>
      {/* header */}

      {/* title of jobs and infos */}
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#00F0FF" }}>
          {screenDisplay.jobs[0].job_title.toUpperCase()}
        </Text>
        <Text style={{ fontSize: 18, color: "#00F0FF" }}>
          {screenDisplay.name}
        </Text>
        <Text style={{ fontSize: 14, color: "#00F0FF" }}>
          {Math.floor(screenDisplay.salary * 151.67)} € Brut/M -{" "}
          {screenDisplay.contract}
        </Text>
      </View>
      {/* title of jobs and infos */}

      {/* MAP*/}
      <View style={styles.map}>
        <Text style={{ fontSize: 18 }}>MAP</Text>
      </View>
      {/* MAP*/}

      {/* title of description*/}
      <View style={styles.description}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000B33" }}>
          Description & compétences
        </Text>
      </View>
      {/* title of description*/}

      {/* bloc scrollView with skills & details of job */}
      <ScrollView style={styles.scrollview}>
        <Text
          style={{
            textAlign: "center",
            margin: 15,
            fontSize: 15,
            color: "#00F0FF",
          }}
        >
          {screenDisplay.description}
        </Text>

        {/* View skills */}

        {viewSkills}
        {viewSkills}
        {viewSkills}
        {viewSkills}
        {viewSkills}
        {/* View skills */}
      </ScrollView>

      {/* bloc scrollView with skills & details of job */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexGrow: 1,
        }}
      >
        <View style={styles.buttonView}>
          <Button
            title="Retour"
            buttonStyle={styles.button}
            onPress={() => setScreenDisplay(null)}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            title="Postuler !"
            buttonStyle={styles.button}
            onPress={() => setScreenDisplay(null)}
          />
        </View>
      </View>
      {/* bloc scrollView with skills & details of job */}
    </View>
  );
}

var colorwhite = "white";
const styles = StyleSheet.create({
  principal: {
    flexDirection: "column",
    backgroundColor: "white",
    flexGrow: 2,
  },
  header: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: colorwhite,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  title: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    backgroundColor: "#000B33",
  },
  map: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "grey",
    margin: 5,
    height: "20%",
  },
  description: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    height: 40,
  },
  scrollview: {
    height: "22%",
    backgroundColor: "#000B33",
  },
  viewskills: {
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#00F0FF",
    height: 80,
    margin: 2,
  },
  button: {
    width: 150,
    heigth: 30,
    borderRadius: 20,
    backgroundColor: "#000B33",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    justifyContent: "center",
    alignItems: "flex-start",
    flexGrow: 1,
  },
});
