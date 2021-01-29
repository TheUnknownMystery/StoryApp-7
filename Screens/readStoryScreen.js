import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import db from '../config.js'
import firebase from 'firebase'


export default class ReadStoryScreen extends React.Component {
  
  constructor() {
    super()

    this.state = {

      SearchedItem: '',
      AllUserInfo: []
    }
  }

  SearchFilterFunction = async (text) => {

    var enteredText = text.split("");
  
    if (enteredText[0].toUpperCase() === "A") {
      
      
      const transactions = await db.collection("UserData").where("Title", "==",text).get();

      transactions.docs.map((doc) => {

        this.setState({

          AllUserInfo: [...this.state.AllUserInfo, doc.data()],

        })
      })

    }
    else if (enteredText[0].toUpperCase() === "B") {
      
       //Checking the value of transaction to map it...
      const transactions = await db.collection("UserData").where("Title", "==", text).get();
      transactions.docs.map((doc) => {

        this.setState({

          AllUserInfo: [...this.state.AllUserInfo, doc.data()],

        })
      })
    }

    else if (enteredText[0].toUpperCase() === "C") {
      
      //Checking the value of transaction to map it...
     const transactions = await db.collection("UserData").where("Title", "==", text).get();
     transactions.docs.map((doc) => {

       this.setState({

         AllUserInfo: [...this.state.AllUserInfo, doc.data()],

       })
     })
   }
    console.log(this.state.AllTransactions)
  }

  componentDidMount = async () => {

    const UserQuery = await db.collection('UserData').get()

    UserQuery.docs.map((doc) => {

      this.setState({

        AllUserInfo: [],
        
      })
    })
  }

  render() {
    return (

      <View>

        <Header/>
     
        <TextInput

          placeholder='Type to Search...'
          style={styles.TextInputStyle}

          onChangeText={(text) => {
            this.setState({ SearchedItem: text })
          }} />


        <TouchableOpacity style={{ marginTop: -24,marginLeft: 305,backgroundColor: 'white', borderWidth: 2, width: '20%' , alignSelf: 'center' }}><Text style={{ alignSelf: 'center', fontWeight: 'bold' }} onPress={() => {

          this.setState({
            AllUserInfo: []
          })
          this.SearchFilterFunction(this.state.SearchedItem)

          
          
        }}>Search...</Text></TouchableOpacity>


        <ScrollView>
          {

            this.state.AllUserInfo.map((Transaction, index) => {

              return (

                <View key={index} style={styles.DatabaseNameStyle}>

                  <View style={{ borderWidth: 0, borderRadius: 5, backgroundColor: 'pink', marginTop: 12, }}>

                    <Text style={{ fontWeight: 'bold', color: 'grey', marginLeft: 10 }}>{"Author: " + Transaction.Author}</Text>
                    <Text style={{ fontWeight: 'bold', color: 'grey', marginLeft: 10 }}>{'Title: ' + Transaction.Title}</Text>
                    <Text style={{ fontWeight: 'bold', color: 'grey', marginLeft: 10 }}>{'Story: ' + Transaction.Story}</Text>

                  </View>

                </View>

              )
            })
          }
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  DatabaseNameStyle: {

    borderBottomWidth: 0,
    fontWeight: 'bold',
    borderColor: 'grey',

  },

  TextInputStyle: {

    borderWidth: 2,
    backgroundColor: 'lightgrey',

  }
})