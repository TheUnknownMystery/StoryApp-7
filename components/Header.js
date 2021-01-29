import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

  class Header extends React.Component {
 render() {
  return (

   <View style={styles.blueBar}>
    <Text style={styles.header}>ReadingScreen</Text>
   </View>
  )
 }
}
  
const styles = StyleSheet.create({

 header: {

  fontWeight: 'bold',
  alignSelf: 'center',
  fontSize: 40,
  marginTop: 10,
  color: 'white'
 },
 
 blueBar:{

 backgroundColor: 'blue'
 

 }
})

export default Header