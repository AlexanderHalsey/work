import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  NativeBaseProvider,
  Box,
  Actionsheet,
  Button,
  useDisclose,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Center,
} from "native-base";
import ListOffersScreen from "./ListOffers";
import ScreenOffer from "./ScreenOffer";

var heartColor = "white";

function OfferCard(props) {
  // on enregistre la dimension de l'écran de l'utilisateur
  const { height, width } = useWindowDimensions();
  // console.log("offerID: ", props.offer._id);
  const [like, setLike] = useState(false);

  var handleClick = () => {
    console.log("click détecté + id offre :", props.offer._id);
    if (like == true) setLike(false);
    else setLike(true);
  };

  let heartStyle;
  if (like == true) {
    heartStyle = {
      marginRight: 3,
      marginLeft: 2,
      color: "red",
    };
  } else {
    heartStyle = {
      marginRight: 3,
      marginLeft: 2,
      color: "#FFD4D4",
    };
  }

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        width: width * 0.9,
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0,
        elevation: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 8,
        marginTop: 10,
      }}
    >
      <Image
        source={{
          uri: props.offer.logo,
        }}
        style={{ width: width * 0.15, height: width * 0.15 }}
      />

      <View
        style={{
          flexDirection: "column",
          height: width * 0.2,
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <Text style={{ color: "grey" }}>{props.offer.name}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {props.offer.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "grey" }}>
            {Math.floor(props.offer.salary * 151.67)} € /Mois
          </Text>
          <Text style={{ color: "grey" }}>{props.offer.adress} </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: width * 0.2,
        }}
      >
        <View
          style={{
            width: width * 0.09,
            height: width * 0.09,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Icon
            name="heart"
            size={23}
            solid
            style={heartStyle}
            // onClick={() => changeLiked(props.movieName, props.movieImg)}
            onPress={() => handleClick()}
          />
        </View>
        <Text style={{ color: "grey" }}>{"7"} km</Text>
      </View>
    </View>
  );
}

export default OfferCard;
