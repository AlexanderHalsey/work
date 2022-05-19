import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'
import Accordion from '../components/Accordion'
export default function MapScreen(props) {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#001150' }}
    >
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      

    </View>
  )
}