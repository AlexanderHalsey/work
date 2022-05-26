import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Badge } from "react-native-elements";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import AccordionMission from "./AccordionMission";

export default function Missions() {
  const missionList = [
    {
      title: "Candidatures",
      icon: (
        <MaterialCommunityIcons
          name="file-document-edit"
          size={40}
          color="#B9FFFF"
        />
      ),
      notifications: 4,
      items: [
        {
          companyName: "Facebook",
          companyLogo: "",
          jobTitle: "Developpeur Front End",
          dateSent: "12 Mai 2022",
          timeSent: "10h05",
          stage: 1,
        },
        {
          companyName: "Facebook",
          companyLogo: "",
          jobTitle: "Developpeur Front End",
          dateSent: "12 Mai 2022",
          timeSent: "10h05",
          stage: 2,
        },
        {
          companyName: "Facebook",
          companyLogo: "",
          jobTitle: "Developpeur Front End",
          dateSent: "12 Mai 2022",
          timeSent: "10h05",
          stage: 3,
        },
        {
          companyName: "Facebook",
          companyLogo: "",
          jobTitle: "Developpeur Front End",
          dateSent: "12 Mai 2022",
          timeSent: "10h05",
          stage: 4,
        },
      ],
    },
    {
      title: "Offres reçues",
      icon: <Ionicons name="contract" size={40} color="#B9FFFF" />,
      notifications: 0,
      items: [],
    },
    {
      title: "Missions à venir",
      icon: <FontAwesome5 name="business-time" size={40} color="#B9FFFF" />,
      notifications: 0,
      items: [],
    },
    {
      title: "Missions archivées",
      icon: <FontAwesome name="archive" size={40} color="#B9FFFF" />,
      notifications: 0,
      items: [],
    },
  ];

  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Feather name="briefcase" size={60} color="#B9FFFF" />
        <Text style={styles.textTitle}>Mes Missions</Text>
        <View style={styles.missionOptions}>
          {missionList.map((missionOption, index) => {
            return (
              <AccordionMission
                key={index}
                text={missionOption.title}
                icon={missionOption.icon}
                notifications={missionOption.notifications}
                items={missionOption.items}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000b33",
  },
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  missionOptions: {
    marginTop: 30,
    flex: 1,
    width: "100%",
  },
  textTitle: {
    color: "#B9FFFF",
  },
});
