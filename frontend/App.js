import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Dashboard from "./components/Dashboard";
import Skills from "./components/Skills";
import Notifications from "./components/Notifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListOffers from "./components/ListOffers";
import Welcome1 from "./components/Welcome1";
import Welcome2 from "./components/Welcome2";
import Inscription from "./components/Inscription";
import CvPopOver from "./components/CvPopOver";
import PersonalInfo from "./components/PersonalInfo";
import MyLikes from "./components/MyLikes";
import MyMission from "./components/MyMission";
import MyDocuments from "./components/MyDocuments";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
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

          // return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#51dee0",
        inactiveTintColor: "#c3fbfb",
        style: {
          backgroundColor: "#001150",
          height: 67,
          paddingBottom: 8,
          borderWidth: 3,
          borderColor: "#c3fbfb",
          borderRadius: 40,
          borderTopWidth: 3,
          borderTopColor: "#c3fbfb",
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="ListOffers" component={ListOffers} />
      <Tab.Screen name="Skills" component={Skills} />
      <Tab.Screen name="Notification" component={Notifications} />
    </Tab.Navigator>
  );
};

export default function App() {
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
