import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'

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
                Analyser les besoins du client
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
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 5,
                }}
              >
                <Text>Analyser les besoins du client</Text>
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginTop: 5,
                  marginLeft: 5,
                  marginRight: 5,
                  paddingLeft: 10,
                  paddingRight: 2,
                }}
              >
                C’est une compétence que j’utilise professionnellement depuis
              </Text>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: 5,
                }}
              >
                <View>
                  <Text> Moins d’ 1 an </Text>
                  <Icon name='star' size={18} color='#FF9087' />
                </View>
                <View>
                  <Text>Entre 1 et 3 ans</Text>
                  <Icon name='star' size={18} color='#FF9087' />
                </View>
                <View>
                  <Text>Plus de 3 ans</Text>
                  <Icon name='star' size={18} color='#FF9087' />
                </View>
              </View>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginTop: 10,
                  marginTop: 5,
                  marginLeft: 5,
                  marginRight: 5,
                  paddingLeft: 10,
                  paddingRight: 2,
                }}
              >
                Dans ce domaine je suis plutôt
              </Text>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: 6,
                  marginBottom: 5,
                }}
              >
                <View>
                  <Text> Débutant</Text>
                  <Icon name='star' size={18} color='#FF9087' />
                </View>
                <View>
                  <Text>A l’aise</Text>
                  <Icon name='star' size={18} color='#FF9087' />
                </View>
                <View>
                  <Text>Expert</Text>
                  <Icon name='star' size={18} color='#FF9087' />
                </View>
              </View>
            </View>
          </>
        )}
      </Animated.View>
    </TouchableOpacity>
  )
}

export default Accordion
