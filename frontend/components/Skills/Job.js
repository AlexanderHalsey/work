import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'

import {connect} from 'react-redux';



const Job = (props) => {
  let [toggled, setToggled] = useState(false)
  const height = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(height, {
      toValue: toggled ? 1 : 0,
      duration: 400,
    }).start()
  }, [toggled])
  return (
    <TouchableOpacity onPress={() => setToggled((prev) => !prev)}>
      <Animated.View
        style={{
          backgroundColor: '#B9FFFF',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 5,

          height: height.interpolate({
            inputRange: [0, 1],
            outputRange: [35, 200],
          }),
        }}
      >
        {!toggled ? (
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{props.title}</Text>
          </TouchableOpacity>
        ) : (
          <>
            <View
                style={{ flex: 1, backgroundColor:'#001150',marginTop: 20, alignItems:"center"}}
                >
                <Text style={{color:"white",marginBottom:45,marginTop:20,fontSize:20}}>Developpeur(se) Full Stack</Text>
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
        elevation:5,
        backgroundColor: "#000B33",
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:5,
        marginBottom:4
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
      },
})

export default Job
