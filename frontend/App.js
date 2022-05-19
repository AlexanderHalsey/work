import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CommonActions } from '@react-navigation/native';

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Dashboard from "./components/Dashboard";
import Skills from "./components/Skills";
import Notifications from "./components/Notifications";
import ListOffers from "./components/ListOffers";
import Welcome1 from "./components/Welcome1";
import Welcome2 from "./components/Welcome2";
import Inscription from "./components/Inscription";
import CvPopOver from "./components/CvPopOver";
import PersonalInfo from "./components/PersonalInfo";
import MyLikes from "./components/MyLikes";
import MyDocuments from "./components/MyDocuments";
import MyMissions from "./components/MyMissions";
import MyContracts from "./components/MyContracts";
import MyPayslips from "./components/MyPayslips";
import MyOtherDocuments from "./components/MyOtherDocuments";
import MyWorkCertificates from "./components/MyWorkCertificates";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const ProfileStack = (props) => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", e => {
      console.log("hello")
    });
    return unsubscribe;
  }, [props.navigation])
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name='Skills' component={Skills} />
      <Stack.Screen name='PersonalInfo' component={PersonalInfo} />
      <Stack.Screen name='ListOffers' component={ListOffers} />
      <Stack.Screen name='MyLikes' component={MyLikes} />
      <Stack.Screen name='MyMissions' component={MyMissions} />
      <Stack.Screen name='MyDocuments' component={MyDocuments} />
      <Stack.Screen name='MyContracts' component={MyContracts} />
      <Stack.Screen name='MyPaySlips' component={MyPayslips} />
      <Stack.Screen name='MyWorkCertificates' component={MyWorkCertificates} />
      <Stack.Screen name='MyOtherDocuments' component={MyOtherDocuments} />
    </Stack.Navigator>
  )
}

const BottomNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === "Dashboard") {
            // iconName = focused
            //   ? "home-sharp"
            //   : "ios-information-circle-outline";
            return <Ionicons name={"home-sharp"} size={25} color={color} />;
            // iconName = 'home-sharp';
          } else if (route.name === "ListOffers") {
            return (
              <MaterialCommunityIcons
                name="text-box-search-outline"
                size={24}
                color={color}
              />
            );
            // iconName = "ios-options";
          } else if (route.name === "Notification") {
            // iconName = "notifications-sharp";
            return (
              <Ionicons name={"notifications-sharp"} size={25} color={color} />
            );
          } else if (route.name === "Skills") {
            return (
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={24}
                color={color}
              />
            );
          }

        },
      })}
      tabBarOptions={{
        activeTintColor: "#00F0FF",
        inactiveTintColor: "#B9FFFF",
        style: {
          backgroundColor: "#001150",
          height: 67,
          paddingBottom: 8,
          borderWidth: 3,
          borderColor: "#00F0FF",
          borderRadius: 40,
          borderTopWidth: 3,
          borderTopColor: "#00F0FF",
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={ProfileStack} />
      <Tab.Screen name="ListOffers" component={ListOffers} />
      <Tab.Screen name="Skills" component={Skills} />
      <Tab.Screen name="Notification" component={Notifications} />
    </Tab.Navigator>
  );
};

export default function App() {

  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    // dans le future on verifiera dans le backend si la persone qui lance l'appli a une compte deja
    // si oui - on "set" user a true
    // si non - on "set" user a false
    setIsUser(true);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen name="CvPopover" component={CvPopOver} />
        <Stack.Screen name="Inscription" component={Dashboard} />
        

        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Skills' component={Skills} />
        <Stack.Screen name='PersonalInfo' component={PersonalInfo} />
        <Stack.Screen name='ListOffers' component={ListOffers} />
        <Stack.Screen name='MyLikes' component={MyLikes} />
        <Stack.Screen name='MyMissions' component={MyMission} />
        <Stack.Screen name='MyDocuments' component={MyDocuments} />
        <Stack.Screen name='MyContracts' component={MyDocuments} />
        <Stack.Screen name='MyPaySlips' component={MyDocuments} />
        <Stack.Screen name='MyWorkCertificates' component={MyDocuments} />
        <Stack.Screen name='MyOtherDocuments' component={MyDocuments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
