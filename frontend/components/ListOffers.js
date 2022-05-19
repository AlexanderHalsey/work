import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import { useDisclose } from "native-base";

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import OfferCard from "./OfferCard";

export default function ListOffersScreen() {
  const isFocused = useIsFocused();
  //variable d'état pour récupérer la liste des offres
  const [offersList, setOffersList] = useState([]);

  const { height, width } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclose();

  //fetch pour récupérer les infos en BDD

  useEffect(() => {
    const findOffers = async () => {
      // console.log(isFocused);
      if (isFocused) {
        const data = await fetch("http://10.2.1.215:3000/offers/listOffers");
        const body = await data.json();
        setOffersList(body.offers);
      }
    };
    findOffers();
  }, [isFocused]);

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
          return <OfferCard key={i} offer={offer} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    baseText: {},
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  },
});
