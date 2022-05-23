// import { StyleSheet, Text, View,SafeAreaView,ScrollView,TextInput } from 'react-native'
// import React from 'react'
import SkillsSelect from "./SkillsSelect";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DropDownList(props) {
  console.log("in child", props.options);
  return (
    <View style={styles.container}>
      {props.options.map((option, i) => {
        return <Text key={i}>{option}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
});

// export default function DropDownList(props) {

//   const {dataSource}=props
//   return ()
//     <SafeAreaView>
//       <View style={styles.container}>
//       <Text>searching</Text>
//     </View>

//     <View>
//     {
//        dataSource.map(item=> {
//         return(
//           <Text>item</Text>
//         )
//       })
//     }
//     </View>

//     </SafeAreaView>
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"white",
//     padding:20
//   }
// })
// )
