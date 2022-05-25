import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

<<<<<<< HEAD
import InfosPersonelles from './InfosPersonelles'
import MyLikes from './MyLikes'
import MyDocuments from './MyDocuments'
import Missions from './Missions/Missions'
import Skills from './Skills/Skills'
=======
import InfosPersonelles from "./InfosPersonelles";
import MyLikes from "./MyLikes";
import MyDocuments from "./MyDocuments";
import Missions from "./Missions/Missions";
import Skills from './Skills/Skills';
>>>>>>> 07eccc113a5edc5ef0c1182701343e0cba044df9

import { connect } from 'react-redux'

import { useIsFocused } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'

function Dashboard(props) {
  const [screenDisplay, setScreenDisplay] = useState(null)
  const isFocused = useIsFocused()
  console.log('avatar dans dashboard:', props.userInfo['Avatar'])
  useEffect(() => {
    if (!isFocused) {
      setScreenDisplay(null)
    }
  }, [isFocused])

  useEffect(() => {
    let p = true
    for (let key of Object.keys(props.userInfo)) {
      if (!props.userInfo[key]) {
        p = false
      }
    }
    setProfileComplete(p)
  }, [props.userInfo])

  useEffect(() => {
    let skillsComplete = true
    for (let job of props.professions) {
      for (let skill of job.skills) {
        if (skill.experience === 0 || skill.level === 0) skillsComplete = false
      }
    }
    setJobSkillsIncomplete(skillsComplete)
  }, [props.professions])

  useEffect(() => {
    setJobOffersLength(props.jobOffers.length)
    setLikedJobsLength(props.jobOffers.filter((offer) => offer.liked).length)
  }, [props.jobOffers])

  const [jobSkillsIncomplete, setJobSkillsIncomplete] = useState(false)
  const [profileComplete, setProfileComplete] = useState(false)
  const [likedJobsLength, setLikedJobsLength] = useState(0)
  const [jobOffersLength, setJobOffersLength] = useState(0)

  if (screenDisplay == 'MyLikes') return <MyLikes />
  else if (screenDisplay == 'MyDocuments') return <MyDocuments />
  else if (screenDisplay == 'PersonalInfo')
    return <InfosPersonelles navigation={props.navigation} />
  else if (screenDisplay == 'MyMissions') return <Missions />
  else {
    return (
      <View style={styles.container}>
        <View style={styles.me}>
          <Text style={styles.itemText}>
            Bonjour {props.userInfo['Prénom']}
          </Text>
          <Image
            style={styles.image}
            source={{ uri: props.userInfo['Avatar'] }}
          />
        </View>

        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => props.navigation.navigate('ListOffers')}
            style={styles.shadowContainer}
          >
            <View style={styles.itemContainer}>
              <View style={[styles.topRight, styles.infoColor]}>
                <Text style={styles.infoText}>{jobOffersLength}</Text>
              </View>
              <MaterialCommunityIcons
                name='text-box-search-outline'
                size={60}
                color='#B9FFFF'
              />
              <Text style={styles.itemText}>Liste annonce</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => setScreenDisplay('MyLikes')}
            style={styles.shadowContainer}
          >
            <View style={styles.itemContainer}>
              <View style={[styles.topRight, styles.infoColor]}>
                <Text style={styles.infoText}>{likedJobsLength}</Text>
              </View>
              <Feather name='list' size={60} color='#B9FFFF' />
              <Text style={styles.itemText}>A etudier</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => setScreenDisplay('MyDocuments')}
            style={styles.shadowContainer}
          >
            <View style={styles.itemContainer}>
              <Ionicons
                name='document-attach-outline'
                size={60}
                color='#B9FFFF'
              />
              <Text style={styles.itemText}>Mes documents</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => setScreenDisplay('PersonalInfo')}
            style={styles.shadowContainer}
          >
            <View style={styles.itemContainer}>
              {!profileComplete && (
                <View style={[styles.topRight, styles.warningColor]}>
                  <Text style={styles.warningText}>!</Text>
                </View>
              )}
              <MaterialCommunityIcons
                name='account-details-outline'
                size={60}
                color='#B9FFFF'
              />
              <Text style={styles.itemText}>Info personnelles</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => props.navigation.navigate('Skills')}
            style={styles.shadowContainer}
          >
            <View style={styles.itemContainer}>
              {jobSkillsIncomplete && (
                <View style={[styles.topRight, styles.warningColor]}>
                  <Text style={styles.warningText}>!</Text>
                </View>
              )}
              <MaterialCommunityIcons
                name='lightning-bolt'
                size={60}
                color='#B9FFFF'
              />
              <Text style={styles.itemText}>Skills</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => setScreenDisplay('MyMissions')}
            style={styles.shadowContainer}
          >
            <View style={styles.itemContainer}>
              <Feather name='briefcase' size={60} color='#B9FFFF' />
              <Text style={styles.itemText}>Mission</Text>
            </View>
          </Pressable>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000b33',
  },
  me: {
    marginTop: 50,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 150,
    marginTop: 10,
    marginBottom: 60,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    borderRadius: 15,
    height: 110,
    margin: 4,
    borderWidth: 2,
    borderColor: '#00F0FF',
    backgroundColor: '#000B33',
  },
  topRight: {
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  infoColor: {
    borderColor: '#B9FFFF',
  },
  infoText: {
    color: '#B9FFFF',
  },
  warningColor: {
    borderColor: 'red',
    opacity: 0.8,
  },
  warningText: {
    color: 'red',
    fontWeight: '900',
    opacity: 0.8,
    marginLeft: 3,
    marginRight: 3,
  },
  shadowContainer: {
    shadowColor: '#00F0FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 20,
  },
  itemText: {
    color: '#B9FFFF',
  },
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    professions: state.professions,
    jobOffers: state.jobOffers,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserInfo: () => {
      dispatch({
        type: 'deleteUserInfo',
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
