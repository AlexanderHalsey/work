import React, { useEffect, useState } from "react";

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
  Text,
} from "native-base";

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import OfferCard from "./OfferCard";

export default function ListOffersScreen() {
  //variable d'état pour récupérer la liste des offres
  const [offersList, setOffersList] = useState([]);

  const { height, width } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclose();

  //fetch pour récupérer les infos en BDD

  useEffect(() => {
    const findOffers = async () => {
      const data = await fetch("http://10.2.1.215:3000/offers/listOffers");
      const body = await data.json();
      console.log(body);
      setOffersList(body.offers);
    };
    findOffers();
  }, []);

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
          return (
            <OfferCard
              key={i}
              company={offer.name}
              jobTitle={offer.title}
              distance="7"
              salary={offer.salary}
              location={offer.address}
              logoImage={offer.logo}
            />
          );
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
