import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Pressable
} from 'react-native'

import Accordion from './Accordion';
import {connect} from 'react-redux';



const Job = (props) => {
  const [toggled, setToggled] = useState(false)
  const height = useRef(new Animated.Value(1)).current

  useEffect(() => {
    console.log("kjldfh")
    Animated.timing(height, {
      toValue: toggled ? 1 : 0,
      duration: 400,
      useNativeDriver: false
    }).start()
  }, [toggled])

  return (
      <TouchableOpacity onPress={() => console.log("kjhg")}>
        <Animated.View
            style={{
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
              height: height.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 200],
            }),
            }}
        >
            {!toggled ? (
            <TouchableOpacity style={[styles.appButtonContainer]}>
                <Text style={styles.appButtonText}>{props.title}</Text>
            </TouchableOpacity>
            ) : (
            <>
                <View
                    style={{ flex: 1, backgroundColor:'#001150',marginTop: 20, alignItems:"center"}}
                    >
                    <Text style={{color:"white",marginBottom:45,marginTop:20,fontSize:20}}>{props.title}</Text>
                    <Text>Ce que je sais faire</Text> 
                    {props.skills.map((el,i) => {
                        <Accordion key={i} skill={el} />
                    })}

                    <Pressable onPress={() => props.navigation.navigate()}>
                        <AntDesign name="checkcircle" size={60} color="white" style={{justifyContent:"center",marginTop:75}} />
                    </Pressable>    
                </View>
            </>
            )}
        </Animated.View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: "#001150",
        borderRadius: 40,
        width: "100%",
        padding: 7,
      },
      appButtonText: {
        fontSize: 11,
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
      },
})

export default Job
