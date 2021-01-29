import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from "react-native";
import Header2 from "../components/Header2";
import db from "../config";

export default class WriteStoryScreen extends React.Component {

    submitStory = async () => {

        db.collection("UserData").add({

            'Author': this.state.author,
            'Story': this.state.body,
            'Title': this.state.title,
            'UserStory': true

        })
    }

    constructor() {
        super()

        this.state = {

            author: '',
            title: '',
            body: ''

        }
    }
    render() {
        return (
           
                <View>

                    <Header2/>

                    <TextInput

                        onChangeText={(text) => {
                            //console.log(this.state.author)
                            this.setState({

                                author: text

                            })
                        }}

                        style={styles.textInputStyle}
                        placeholder='Author'
                    />

                    <TextInput

                        style={styles.textInputStyle}
                        placeholder='Title'

                        onChangeText={(text) => {

                            this.setState({

                                title: text

                            })
                        }} />

                    <TextInput

                        style={styles.textInputStyle2}
                        placeholder='WriteStoryHere'

                        onChangeText={(text) => {

                            this.setState({

                                body: text

                            })
                        }}
                    />

                    <TouchableOpacity style={styles.submitButton} onPress={() => {

                        this.submitStory()
                        ToastAndroid.show("StorySubmitted...", ToastAndroid.LONG)

                    }}>

                        <Text style={styles.SubmitButtonText}>Submit</Text>

                    </TouchableOpacity>

                </View>
        )
    }
}


const styles = StyleSheet.create({

    textInputStyle: {

        borderWidth: 2,
        justifyContent: 'center',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        marginTop: 50,
        alignSelf: 'center'
    },

    textInputStyle2: {

        height: 100,
        width: '80%',
        alignSelf: 'center',
        marginTop: 50,
        borderWidth: 2,
        backgroundColor: 'lightgrey',
        alignSelf: 'center'
    },

    SubmitButtonText: {

        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 10


    },

    submitButton: {

        borderWidth: 6,
        borderColor: 'lightgrey',
        height: 60,
        width: 300,
        borderRadius: 20,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginTop: 60
    }
})