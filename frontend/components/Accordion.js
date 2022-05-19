
import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Accordion = () => {
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 9 }}>
                Rédiger une spécificité technique de besoin (STB)
              </Text>
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name='star' size={18} color='#FF9087' />
              <Icon name='star' size={18} color='#FF9087' />
              <Icon name='star' size={18} color='#FF9087' />
              <Icon name='star' size={18} color='#FF9087' />
              <Icon name='star' size={18} color='#FF9087' />
              <Icon name='star' size={18} color='#FF9087' />
            </View>
          </View>
        ) : (
          <>
            <Text>Analyser les besoins du client</Text>
            <Text>
              C'est une compétence que j'utilise professionnellement depuis
            </Text>
          </>
        )}
      </Animated.View>
    </TouchableOpacity>
  )
}

export default Accordion
