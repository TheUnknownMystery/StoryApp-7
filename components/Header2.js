import * as React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

 class Header2 extends React.Component {
 render() {
  return (
   <View style = {{Backgroundcolor: 'lightgrey',flex: 1}}>
    <View style={styles.blueBar}>
     <Text style={styles.header}>WritingScreen</Text>
    </View>
   </View>
  )
 }
}

const styles = StyleSheet.create({

 header: {

  color: 'white',
  fontWeight: 'bold',
  alignSelf: 'center',
  fontSize: 40,
  marginTop: 30

 },

 blueBar: {

  backgroundColor: 'lightpink'

 }
})

export default Header2