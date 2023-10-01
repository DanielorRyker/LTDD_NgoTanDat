import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import logo from './assets/Ellipse 8.png';

export default function App() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./assets/Ellipse 8.png')} />
            <Text style={styles.text1}>GROW{'\n'}YOUR BUSINESS</Text>
            <Text style={styles.text2}>We will help you to grow your business using {'\n'} online server</Text>
            <div style={styles.form_btn}>
            <button style={styles.btn_Login}>login</button>
            <button style={styles.btn_Sign}>sign up</button>
            
            </div>
            <Text style={styles.text3}>how we work?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #CAF5F7 80%,  #2CD3F8 100%)',
        gap: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 140,
        height: 140,
    },
    text1:{
        marginTop: 66,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29.3,
        textAlign: 'center',
        alignItems: 'center',
    },
    text2:{
       marginTop: 50,
       textAlign: 'center',
       fontFamily: 'Roboto',
       fontWeight: 700,
       fontSize: 15,
       lineHeight: 17.58,
       alignItems: 'center',
    },
    btn_Login:{
        width: 119,
        height: 48,
        borderRadius: 10,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#E3C000',
        alignItems: 'center',
        textTransform: 'uppercase',
        flexShrink: 0,
        marginTop: 62,
        borderWidth: 0,
    },
    btn_Sign:{
        width: 119,
        height: 48,
        borderRadius: 10,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#E3C000',
        alignItems: 'center',
        textTransform: 'uppercase',
        flexShrink: 0,
        marginTop: 62,
        marginLeft: 54,
        borderWidth: 0,
    },
    text3:{
        marginTop: 21,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 17.58,
        textAlign: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
    },
});