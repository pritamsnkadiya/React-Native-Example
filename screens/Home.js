
import React, {Component} from 'react';
import {Avatar, Card, Title, Paragraph } from 'react-native-paper';
import {Platform,Button, ScrollView,StyleSheet, TouchableOpacity,Text, View} from 'react-native';

export default class Home extends Component {
  render() {
    return (
        <View style = {styles.container}>

            <TouchableOpacity 
                style={[styles.button]}
                onPress={() => this.props.navigation.navigate('AllHairDesign')}>
            <Text 
                style={[styles.text]}>
                All Hair Designs
            </Text>
            </TouchableOpacity>

            <View style={{margin:30}} />
            <TouchableOpacity 
                style={[styles.button]}
                onPress={() => this.props.navigation.navigate('Home')}>
            <Text 
                style={[styles.text]}>
                Downloaded Designs
            </Text>
            </TouchableOpacity>

            <View style={{margin:30}} />
            <TouchableOpacity 
                style={[styles.button]}
                onPress={() => this.props.navigation.navigate('Home')}>
            <Text 
                style={[styles.text]}>
                Send to friends
            </Text>
            </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    button: {
        display: 'flex',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.9,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 18,
        fontWeight:'bold',
        color: '#FFFFFF',
    },

});