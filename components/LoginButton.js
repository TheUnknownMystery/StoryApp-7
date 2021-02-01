import * as React from 'react'
import { StyleSheet } from 'react-native'

import { View, Text, TouchableOpacity, TextInput } from 'react-native'

class LoginButton extends React.Component {
 render() {
  return (
   <View>



    <TouchableOpacity style={{ marginTop: 36, marginLeft: 60, borderWidth: 3, borderColor: 'white', borderRadius: 10, width: '20%', alignSelf: 'center' }} onPress = {this.props.onPress}>

     <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>Login</Text>

    </TouchableOpacity>

   </View>
  )
 }
}


export default LoginButton