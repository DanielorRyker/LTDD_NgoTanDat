import React from "react";
import { Image, StyleSheet, Text, View} from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/Ellipse 8.png')} />
        <Text style={styles.text1}>GROW{'\n'}YOUR BUSINESS</Text>
        <Text style={styles.text2}>We will help you to grow your business using {'\n'} online server</Text>
        <div style={styles.form_btn}>
        <button style={styles.btn_Login}>LOGIN</button>
        <button style={styles.btn_Sign}>SIGN UP</button>
        </div>
    </View>
  );
}
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: '#00CCF9',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 140,
        height: 140,
    },
    text1:{
        marginTop: 52,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29.3,
        textAlign: 'center',
        alignItems: 'center',
    },
    text2:{
       marginTop: 62,
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
        color: '#000000',
        backgroundColor: '#e3c000',
        marginLeft: 0,
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
        color: '#000000',
        backgroundColor: '#e3c000',
        marginLeft: 56,
        borderWidth: 0,
    },

    form_btn:{
        marginTop: 45,
    },
    
    
    });