import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

export default function ScreenOffer(props) {
  useEffect(() => {
    console.log(props.offerFromCard);
  });

  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text>Offer selected</Text>
      <Text>Offer details</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
