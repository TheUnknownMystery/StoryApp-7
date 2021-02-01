import * as React from 'react'
import { View, StyleSheet, Text, Image , TextInput } from 'react-native'
import LoginButton from "../components/LoginButton"
import firebase from 'firebase'

export default class LoginPage extends React.Component {

 constructor()
 {
 super()
 
 this.state={

  Email: '',
  Password: ''

  }
 }

 Login=async(Email,Password)=>{
 
 if(Email && Password)
 {

 try{

 const response = await firebase.auth().signInWithEmailAndPassword(Email,Password)
 
 if(response){

  this.props.navigation.navigate("ReadandWrite")
  
  }

 }

 catch(error){

 switch(error.code){

 case 'auth/user-not-found':
   alert("User not Found")
  break
  
  case 'auth/invalid-email':
    alert("WrongEmail")

    break
  
 }


    
  }
 }else{

  alert('Please enter Email and password')


 }
}
 render() {
  return (

   <View style = {{flex: 1 , backgroundColor: '#3C6382'}}>

    <Text style =   {styles.Header}>

     LoginPage
     
    </Text>
       
      <View>
       <Image
       
       
        source = {require("../assets/booklogo.png")}
        style={{width: 200 , height: 200 ,marginLeft: 590,marginTop: 50,borderWidth: 5 , borderColor: 'white',borderRadius: 7}}
       
       />
       </View>
    <View>

<TextInput

 style={styles.LoginStyle}
 placeholder = 'abc@gmail.com'
 keyboardType = 'email-address'

 onChangeText={(text)=>{

 this.setState({Email: text})

 }}
/>

<TextInput

 style = {styles.LoginStyle}
 placeholder = 'Password'
 secureTextEntry = {true}

 onChangeText={(text)=>{

 this.setState({Password: text})
  
 }}
/>

</View>
    <LoginButton onPress = {()=>{
    
    console.log('Pressed')
    this.Login(this.state.Email,this.state.Password)

    }}/>
   </View>

  )
 }
}



const styles = StyleSheet.create({

Header:{
color: 'white',
fontWeight: 'bold',
alignSelf: 'center',
fontSize: 40,
borderBottomWidth: 3,
borderColor: 'white'
},

 LoginStyle: {

  alignSelf: 'center',
  borderBottomWidth: 2,
  marginTop: 100,
  width: '80%',
  borderColor: 'white'

 }

})