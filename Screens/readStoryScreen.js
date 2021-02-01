import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Header from '../components/Header'
import db from '../config.js'
import firebase from 'firebase'
//import { FlatList } from 'react-native-gesture-handler';


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

    if (enteredText[0] === undefined) {

      //alert("working")

      const Transaction = await db.collection('UserData').where("UserStory", '==', true).get()

      Transaction.docs.map((doc) => {

        this.setState({ AllUserInfo: [...this.state.AllUserInfo, doc.data()] })

      })
    }
    else if (enteredText[0].toUpperCase() === "A") {


      const transactions = await db.collection("UserData").where("Title", "==", text).get();

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

        <Header />

        <TextInput

          placeholder='Type to Search...'
          style={styles.TextInputStyle}

          onChangeText={(text) => {
            this.setState({ SearchedItem: text })
          }} />


        <TouchableOpacity style={{ marginTop: -24, marginLeft: 305, backgroundColor: 'white', borderWidth: 2, width: '20%', alignSelf: 'center' }}><Text style={{ alignSelf: 'center', fontWeight: 'bold' }} onPress={() => {

          this.setState({
            AllUserInfo: []
          })
          this.SearchFilterFunction(this.state.SearchedItem)



        }}>Search...</Text></TouchableOpacity>




        <FlatList

          data={this.state.AllUserInfo}
          renderItem={({ item }) => {

            return (
              <View style={{ backgroundColor: 'pink', borderWidth: 2, borderColor: 'darkpink', fontWeight: 'bold', borderRadius: 10, marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>{'Author: ' + item.Author}</Text>
                <Text style={{ fontWeight: 'bold' }}>{'Title: ' + item.Title}</Text>
                <Text style={{ fontWeight: 'bold' }}>{'Story: ' + item.Story}</Text>
                <Text style={{ fontWiehgt: 'bold', color: 'white' }}>{'Date: ' + firebase.firestore.Timestamp.now().toDate()}</Text>
              </View>
            )
          }}

        />


      </View >
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