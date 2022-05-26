import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Pressable,
} from "react-native";

import Accordion from "./Accordion";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const Job = (props) => {
  const [toggled, setToggled] = useState(false);
  const height = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    console.log(props);
    Animated.timing(height, {
      toValue: toggled ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [toggled]);

  return (
    <Animated.View
      style={{
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:-5,
        marginLeft:-11,
        marginRight:-11,
        height: height.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 650],
        }),
      }}
    >
      {!toggled ? (
        <TouchableOpacity
          style={[styles.appButtonContainer]}
          onPress={() => setToggled(!toggled)}
        >
          <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setToggled(!toggled)}
            style={{
              flex: 1,
              backgroundColor: "#001150",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                marginBottom: 45,
                marginTop: 50,
                fontSize: 20,
              }}
            >
              {props.title}
            </Text>
            <Text>Ce que je sais faire</Text>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "#001150",
              }}
            >
              {props.skills.map((skill, i) => {
                return <Accordion key={i} skill={skill} />;
              })}
            </View>

            <Pressable onPress={() => props.navigation.navigate()}>
              <AntDesign
                name="checkcircle"
                size={60}
                color="white"
                style={{ justifyContent: "center", marginTop: 75,marginBottom:20 }}
              />
            </Pressable>
          </TouchableOpacity>
        </>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#001150",
    borderRadius: 40,
    width: "100%",
    padding: 7,
  },
  appButtonText: {
    fontSize: 13,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Job;
