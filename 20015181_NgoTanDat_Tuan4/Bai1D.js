import React from 'react';
import {Image, StyleSheet, View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function App() {
    return (
        <View style={styles.container}>
           
           <Text style={styles.text1}>FOGET {'\n'}PASSWORD</Text>
           <Text style={styles.text2}>Provide your account email for which you {'\n'} want to reset your password</Text>
            <View style={styles.formEmail}>
            <Image style={styles.icon} source={require('./assets/mail-29353651.svg')} />
            <TextInput style={styles.inputEmail} placeholder="Email" />
            </View>
            <button style={styles.btnNext}>Next</button>
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
        marginTop: 37,
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
       alignItems: 'center',
       width: 302,
         height: 53,
    },

    icon:{
        width: 48,
        height: 45,
    },
    formEmail:{
        width: 305,
        height: 45,
        flexDirection: 'row',
        marginTop: 10,

    },
    inputEmail:{
        width: 257,
        height: 45,
        backgroundColor: '#C4C4C4',
        fontSize: 15,
        lineHeight: 17.58,
        fontFamily: 'Roboto',
        color: '#000000',
    },
    btnNext:{
        width: 305,
        height: 45,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#E3C000',
        alignItems: 'center',
        textTransform: 'uppercase',
        marginTop: 43,
        borderWidth: 0,
    },
});