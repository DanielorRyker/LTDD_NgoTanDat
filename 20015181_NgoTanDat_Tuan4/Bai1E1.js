import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
           
           <Text style={styles.text1}>REGISTER</Text>
           
            <View style={styles.formRe}>
            <TextInput style={styles.inputName} placeholder="Name" />
            <TextInput style={styles.inputPhone} placeholder="Phone" />
            <TextInput style={styles.inputEmail} placeholder="Email" />
            
            <View style={styles.formPassword}>    
                <TextInput style={styles.inputPassword} placeholder="Password" />
                <Image style={styles.iconEye} source={require('./assets/eye 1.png')} />
            
            <TextInput style={styles.inputBirth} placeholder="Birthday" />
            <View style={styles.grRadio}>
               <Text style={styles.btnRadio}  type='radio'>Male</Text>
               <Text style={styles.btnRadio}  type='radio'>Female</Text>
            </View>
        </View>
            <button style={styles.btnNext}>REGISTER</button>
            <Text style={styles.text2}>When you agree to terms and conditions</Text>
      </View> 
    </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#D8EFDE',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    text1:{
        marginTop: 40,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29.3,
        textAlign: 'center',
        alignItems: 'center',
    },
    formRe:{
        width: 330,
        height: 54,
        marginTop: 50,
        justifyContent: 'center',
    },

});