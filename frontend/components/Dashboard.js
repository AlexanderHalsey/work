import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Bonjour Maxine</Text>
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            //  resizeMode: 'contain'
          }}
          source={require("../assets/girl.jpg")}
        />
      </View>

      {/* <View style={styles.container}/> */}

      <View>
        <View style={styles.buttonContainer}>
          <View>
            {/* <Icon
    name='fontawesome|facebook-square'
    size={25}
    color='#3b5998'
    style={{height:25,width:25}}/> */}
            <Pressable>

             {/* onPress={() => {
           setTimesPressed((current) => current + 1);
                 }}
            style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )} */}


            </Pressable>
            <Button
              style={{ width: 50 }}
              icon={<Icon name="arrow-right" size={15} color="white" />}
              title="Liste annonce"
            />
          </View>

          <Button title="A etudier" />
        </View>

        <View style={styles.buttonContainer}>
          <View>
            <Button title="Mes documents" />
          </View>
          <Button title="Info personnel" />
        </View>

        <View style={styles.buttonContainer}>
          <View>
            <Button title="Skills" />
          </View>
          <Button title="Mission" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    position: "absolute",
    top: 200,
    width: Dimensions.get("screen").width / 1,
    // flexWrap:"wrap"
  },

  // width: Dimensions.get("screen").width / 2,
  // height: 100,
  // backgroundColor: "rgba(0,0,0,.5)",
  // justifyContent: 'center',
  // alignItems: 'center',
  // position: 'relative',
  // marginBottom: 1
  buttonContainer: {
    flex: 1,
    width: 500,
    height: 100,
    // backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "space-evenly",
    alignItems: "center",
    // position: 'relative',
    flexDirection: "row",
    marginBottom: 0,
    borderRadius: 5,
    paddingBottom: 100,
    paddingTop: 45,
  },
});
