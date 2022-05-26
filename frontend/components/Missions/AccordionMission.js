import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { LinearProgress } from "react-native-elements";

export default function AccordionMission(props) {
  let [toggled, setToggled] = useState(false);
  const height = useRef(new Animated.Value(1)).current;
  const backColor = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(height, {
      toValue: toggled ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(backColor, {
      toValue: toggled ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [toggled]);

  return (
    <Pressable onPress={() => setToggled(!toggled)}>
      <Animated.View
        style={[
          styles.body,
          {
            backgroundColor: backColor.interpolate({
              inputRange: [0, 1],
              outputRange: ["#000b33", "#7d8397"],
            }),
            height: height.interpolate({
              inputRange: [0, 1],
              outputRange: [85, props.items.length * 129 + 75],
            }),
          },
        ]}
      >
        <View style={styles.section}>
          {props.icon}
          <Text style={styles.text}>{props.text}</Text>
          <View style={styles.badges}>
            <Text style={[styles.text, styles.badgeText]}>
              {props.notifications}
            </Text>
          </View>
        </View>
        {toggled &&
          props.items.map((item, i) => {
            return (
              <Animated.View
                key={i}
                style={[
                  styles.item,
                  {
                    height: height.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 115],
                    }),
                  },
                ]}
              >
                <View style={styles.itemFirstLine}>
                  <View style={styles.itemFirstLineCompany}>
                    <Image
                      style={styles.logo}
                      source={require("../../assets/facebook_icon.png")}
                    />
                    <Text style={styles.companyName}>{item.companyName}</Text>
                  </View>
                  <View style={styles.itemFirstLineOffer}>
                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                    <Text style={styles.sentAt}>
                      Envoyé le {item.dateSent} à {item.timeSent}
                    </Text>
                  </View>
                </View>
                {/* <Text>{item.stage}</Text> */}
                <View style={styles.stage}>
                  <View style={styles.overlainInfo}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <View style={styles.viewCircle}>
                        <Text style={styles.textCircle}>Envoyée</Text>
                        <View style={styles.circle}></View>
                      </View>
                      <View style={styles.viewCircle}>
                        <Text style={styles.textCircle}>Reçue</Text>
                        <View style={styles.circle}></View>
                      </View>
                      <View style={styles.viewCircle}>
                        <Text style={styles.textCircle}>A l'étude</Text>
                        <View style={styles.circle}></View>
                      </View>
                      <View style={styles.viewCircle}>
                        <Text style={styles.textCircle}>Validée !</Text>
                        <View style={styles.circle}></View>
                      </View>
                    </View>
                  </View>

                  <LinearProgress
                    color="secondary"
                    variant="determinate"
                    value={0.08}
                    // value={0.35}
                    // value={0.63}
                    // value={0.92}
                  ></LinearProgress>
                </View>
              </Animated.View>
            );
          })}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
  },
  section: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    color: "#B9FFFF",
    fontSize: 18,
  },
  badgeText: {
    top: -4,
  },
  badges: {
    borderWidth: 3,
    borderColor: "#B9FFFF",
    borderRadius: 10,
    height: 30,
    width: 25,
    alignItems: "center",
    backgroundColor: "gray",
  },
  item: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 5,
    marginBottom: 15,
  },
  itemFirstLine: {
    flexDirection: "row",
  },
  itemFirstLineCompany: {
    flexDirection: "row",
    flex: 1,
    padding: 2,
    paddingTop: 5,
  },
  itemFirstLineOffer: {
    flexDirection: "column",
    flex: 2,
    padding: 2,
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  sentAt: {
    fontSize: 10,
    fontStyle: "italic",
    textAlign: "center",
  },
  companyName: {
    fontSize: 10,
  },
  stage: {
    marginTop: 43,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: "#add8e6",
    borderWidth: 2,
  },
  progressLine: {
    height: 4,
    width: "79%",
    backgroundColor: "#000b33",
  },
  overlainInfo: {
    flexDirection: "column",
    width: "100%",
    position: "absolute",
    height: 55,
    top: -34,
    margin: -2,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circleAndText: {
    marginLeft: 17,
    maxWidth: "20%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  circle: {
    height: 10,
    width: 10,
    borderRadius: 100,
    backgroundColor: "blue",
  },
  textCircle: {
    fontSize: 10,
    margin: 5,
  },
  viewCircle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
