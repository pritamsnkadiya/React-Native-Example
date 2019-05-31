import React, {Component} from 'react';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {Platform, Button, ScrollView, StyleSheet, TextInput, Text, View, Image} from 'react-native';
export default class Splash extends Component {

    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 3000);
    }

    render() {
        return (
            <Image
                style={{flex:1,width: 415, height: 214}}
                source={require('/home/pritamsankadiya/Desktop/testMayank/HairDesign/android/app/src/image/hair.jpeg')}
                //source={{uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dfordelhi.in%2Fwp-content%2Fuploads%2F2017%2F12%2Fmehndi-design-2013-new-latest-hd-wallpapers-e1513078240270.jpg&imgrefurl=https%3A%2F%2Fwww.dfordelhi.in%2Ftop-5-best-mehendi-walas-in-delhi-that-you-must-hire-for-your-wedding%2Fmehndi-design-2013-new-latest-hd-wallpapers%2F&docid=jHV_9_w_62Hl3M&tbnid=KOaPz_7_tOrsPM%3A&vet=12ahUKEwjWpvf5gMPiAhULu48KHelxBG44yAEQMygLMAt6BAgBEAw..i&w=1100&h=619&bih=637&biw=1323&q=mehndi%20design%20images%20hd&ved=2ahUKEwjWpvf5gMPiAhULu48KHelxBG44yAEQMygLMAt6BAgBEAw&iact=mrc&uact=8#h=619&imgdii=KdLjgjdMDfnx5M:&vet=12ahUKEwjWpvf5gMPiAhULu48KHelxBG44yAEQMygLMAt6BAgBEAw..i&w=1100'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container_button: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});