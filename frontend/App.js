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
        {/*<Stack.Screen name="BottomNavigator" component={BottomNavigator} /> */}
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="Welcome2" component={Dashboard} />
        <Stack.Screen name="CvPopover" component={Dashboard} />
        <Stack.Screen name="Register" component={Dashboard} />

        {/*<Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Skills' component={Dashboard} />
        <Stack.Screen name='PersonalInfo' component={Dashboard} />
        <Stack.Screen name='ListOffers' component={Dashboard} />
        <Stack.Screen name='MyLikes' component={Dashboard} />
        <Stack.Screen name='MyMissions' component={Dashboard} />
        <Stack.Screen name='MyDocuments' component={Dashboard} />
        <Stack.Screen name='MyContracts' component={Dashboard} />
        <Stack.Screen name='MyPaySlips' component={Dashboard} />
        <Stack.Screen name='MyWorkCertificates' component={Dashboard} />
        <Stack.Screen name='MyOtherDocuments' component={Dashboard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
