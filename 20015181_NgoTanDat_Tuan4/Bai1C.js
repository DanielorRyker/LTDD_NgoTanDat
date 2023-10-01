import React from 'react';
import {Image, StyleSheet, View, Text, TextInput} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
          <Text style={styles.text1}>CODE</Text>
           <Text style={styles.text2}>VERIFICATION</Text>
           <Text style={styles.text3}>Enter ontime password sent on {'\n'} ++849092605798</Text>
            <View style={styles.formOTP}>
            <TextInput style={styles.inputOTP}/>
            <TextInput style={styles.inputOTP}/>
            <TextInput style={styles.inputOTP}/>
            <TextInput style={styles.inputOTP}/>
            <TextInput style={styles.inputOTP}/>
            <TextInput style={styles.inputOTP}/>
            </View>
            <button style={styles.btnNext}>VERIFY CODE</button>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #CAF5F7 80%,  #2CD3F8 100%)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        margin:0,
        padding:0,

    },
    logo: {
        width: 105,
        height: 117,
        marginTop: 76,
    },
    text1:{
        marginTop: 113,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 60,
        lineHeight: 70.31,
        textAlign: 'center',
        alignItems: 'center',
    },
    text2:{
       marginTop: 62,
       textAlign: 'center',
       fontFamily: 'Roboto',
       fontWeight: 700,
       fontSize: 20,
       alignItems: 'center',
       width: 302,
         height: 53,
    },
    text3:{
        marginTop: 22,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 17.58,
        alignItems: 'center',
        width: 302,
        height: 53,
    },
    formOTP:{
        width: 305,
        height: 45,
        flexDirection: 'row',
        marginTop: 10,

    },
    inputEmail:{
        marginTop: 14,
        width: 257,
        height: 45,
        backgroundColor: '#C4C4C4',
        fontSize: 15,
        lineHeight: 17.58,
        fontFamily: 'Roboto',
        color: '#000000',
    },
    inputOTP:{
        width: 50,
        height: 50,
        fontSize: 15,
        border: '1px solid #000000',
    },
    btnNext:{
        width: 339,
        height: 50,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#E3C000',
        alignItems: 'center',
        textTransform: 'uppercase',
        marginTop: 34,
        borderWidth: 0,
    },
});