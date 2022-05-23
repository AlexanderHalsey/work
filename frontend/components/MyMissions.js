import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Badge } from "react-native-elements";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



export default function MyMissions() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Feather name="briefcase" size={60} color="#B9FFFF" />
        <Text style={styles.textTitle}>MyMissions</Text>
        <View style={styles.missionOptions}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="file-document-edit" size={40} color="#B9FFFF" />
            <Text style={styles.text}>Candidatures</Text>
            <View style={styles.badges}><Text style={[styles.text, styles.badgeText]}>0</Text></View>
          </View>
          <View style={styles.row}>
            <Ionicons name="contract" size={40} color="#B9FFFF" />
            <Text style={styles.text}>Offres reçues</Text>
            <View style={styles.badges}><Text style={[styles.text, styles.badgeText]}>0</Text></View>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="business-time" size={40} color="#B9FFFF" />
            <Text style={styles.text}>Missions à venir</Text>
            <View style={styles.badges}><Text style={[styles.text, styles.badgeText]}>0</Text></View>
          </View>
          <View style={styles.row}>
            <FontAwesome name="archive" size={40} color="#B9FFFF" />
            <Text style={styles.text}>Missions archivées</Text>
            <View style={styles.badges}><Text style={[styles.text, styles.badgeText]}>0</Text></View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000b33"
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
  row: {
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textTitle: {
    color: "#B9FFFF",
  },
  text: {
    color: "#B9FFFF",
    fontSize: 18,
  },
  badgeText: {
    top: -3
  },
  badges: {
    borderWidth: 3,
    borderColor: "#B9FFFF",
    borderRadius: 10,
    height: 30,
    width: 25,
    alignItems: "center",
    backgroundColor: "gray"
  }

})