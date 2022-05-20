import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import Accordion from '../components/Accordion'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AntDesign } from '@expo/vector-icons';




// import { Provider } from "react-redux";
// import {createstore,combineReducers} from 'redux'

// const store = createStore(combineReducers({jobData}));

// const [jobSkillsList, setjobSkillsList] = useState();


const skillsList = [
  'Analyser les besoins du client',
  'Rédiger une Spécification Technique de Besoin (STB)',
  'Réaliser un prototype de la solution technique ',
  'Concevoir et développer les programmes et applications',
  'Analyser des problèmes techniques',
  'Déterminer des mesures correctives',
  "Traiter l'information (collecter, classer et mettre à jour)"
 ];

export default function MapScreen(props) {

  return (

    
      <View style={{
        flex:1
      }}>
        <View style={{
          justifyContent:"center",
          alignItems:"center",
          marginTop:50,
          marginBottom:40,
          

        }}>
        <MaterialCommunityIcons
              name="lightning-bolt"
              size={60}
              color="black"
            />
            <Text style={{fontWeight:"bold"}}>Métiers & Compétence</Text>
        </View>
        
      <View
      style={{ flex: 1, backgroundColor:'#001150',marginTop: 20, alignItems:"center"}}
      >
        <Text style={{color:"white",marginBottom:45,marginTop:20,fontSize:20}}>Developpeur(se) Full Stack</Text>
        <Text>Ce que je sais faire</Text>
        
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      {/* <Icon name='star' size={60} color='#FF9087' style={{justifyContent:"center",marginTop:50}} /> */}
      <Pressable onPress={() => props.navigation.navigate()}>
      <AntDesign name="checkcircle" size={60} color="white" style={{justifyContent:"center",marginTop:75}} />

      </Pressable>
      
    </View>

      </View>

      
    
    
  )
}