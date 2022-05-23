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
import OfferCard from "./OfferCard";
import ScreenOffer from "./ScreenOffer";

export default function ListOffersScreen(props) {
  const isFocused = useIsFocused();
  //variable d'état pour récupérer la liste des offres
  const [offersList, setOffersList] = useState([]);

  const { height, width } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclose();

  //fetch pour récupérer les infos en BDD
  const [screenDisplay, setScreenDisplay] = useState(null);

  useEffect(() => {
    console.log("props: ", props);
    const findOffers = async () => {
      // console.log(isFocused);
      if (isFocused) {
        const data = await fetch("http://10.2.2.41:3000/offers/listOffers");
        const body = await data.json();
        setOffersList(body.offers);
      } else setScreenDisplay(null);
    };
    findOffers();
  }, [isFocused]);

  const detail = (offer) => {
    setScreenDisplay(offer);
  };
  // console.log("titre annonce : ", screenDisplay.title);

  if (screenDisplay) {
    //va devoir envoyer vers ScreenOffer avec les props (avant il y avait tout le bloc view qui affiche le détail de l'offre)

    return ScreenOffer;
  } else
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: width,
          marginTop: 30,
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            width: width,
          }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {offersList.map((offer, i) => {
            return <OfferCard key={i} offer={offer} callback={detail} />;
          })}
        </ScrollView>
      </SafeAreaView>
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
