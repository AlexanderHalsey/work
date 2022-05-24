import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ScrollView,
    Pressable
} from 'react-native'
import React, {useState, useEffect} from 'react';

import { Input } from 'react-native-elements';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import {connect} from 'react-redux';

function InfosPersonelles(props) {
  const [infoDisplay, setInfoDisplay] = useState(true);

  useEffect(() => {
    // to incorporate upon user signIn and signUp

    props.initialiseUserInfo({
        "Nom": "Alex",
        "Prénom": "Halsey",
        "Mail": "alex.halsey@icloud.com",
        "Téléphone": "06060606",
        "Date de Naissance": "",
        "Lieu de Naissance": "",
        "Adresse": "123 Avenue",
        "Ville": "Marseille",
        "Code Postal": "123456",
    });
  },[])

  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: "center"}}>
        <MaterialCommunityIcons 
            name="account-details-outline" 
            size={60} 
            color="#000b33"
            style={{marginTop: 50,}}
        />
        <Text style={styles.textTitle}>Infos Personelles</Text>
        {infoDisplay && <View
            style={styles.infoContainer}
        >
            <Pressable onPress={() => setInfoDisplay(false)} style={styles.exitInfo}>
                <Feather name="x-circle" size={24} color="gray" />
            </Pressable>
            <Image
                style={styles.infoManIcon}
                source={require("../assets/info_man_icon.png")}
            />
            <View style={styles.infoTextContainer}>
                <Text style={styles.infotext1}>
                    Complétez ou corrigez les informations ci-dessous.
                </Text>
                <Text style={styles.infotext2}> 
                    Veillez à leur exactitude. Elles serviront à la réalisation des contrats, bulletins de salaires, etc ...
                </Text>
            </View>
        </View>}
        <View style={{alignItems: "center", paddingBottom: 80, marginTop: 10}}>
            
            {Object.keys(props.userInfo).map((key, i) => {
                return (
                <Input key={i} label={key}  containerStyle={{marginBottom: 10}} inputContainerStyle={{height: 20, width: "80%", borderBottomColor: "#00F0FF"}} inputStyle={{fontSize: 14}} labelStyle={{fontSize: 14}} placeholder={`Ajouter votre ${key.toLowerCase()} ...`}
                errorMessage={props.userInfo[key].length === 0 ? "Veuillez remplir cette champ" : ""} renderErrorMessage={props.userInfo[key].length === 0} value={props.userInfo[key]} onChangeText={val => {
                    let obj = {};
                    obj[key] = val;
                    props.updateUserInfo(obj)
                }} />)
            })}
            <Pressable onClick={() => {console.log("Send user Information to backend for storage")}}>
                <View style={{ borderRadius: 100, height: 50, width: 50, position: "absolute", bottom: 20, backgroundColor: "#00F0FF"}} />
                <FontAwesome name="check-circle" size={60} color="#000b33" style={{ position: "absolute", bottom: 15}} />
            </Pressable>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    textTitle: {
        color: "#000b33",
    },
    infoContainer: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#f3fcfe",
        borderRadius: 23,
        width: "90%",
        paddingTop: 27,
        paddingBottom: 20,
    },
    infoTextContainer: {
        flex: 1, 
        padding: 5,
    },
    infoManIcon: {
        width: 92, 
        height: 92, 
        marginLeft: 7
    },
    exitInfo: {
        position: "absolute", 
        top: 5, 
        right: 8
    },
    infotext1: {
        textAlign: "center",
        fontSize: 10,
        marginBottom: 10
    },
    infotext2: {
        textAlign: "center",
        fontSize: 10,
        fontStyle: "italic"
    }
})

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initialiseUserInfo: userInfo => {
            dispatch({
                type: "initialiseUserInfo",
                userInfo: userInfo
            })
        },
        updateUserInfo: updatedInfo => {
            dispatch({
                type: "updateUserInfo",
                updatedInfo: updatedInfo
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfosPersonelles);