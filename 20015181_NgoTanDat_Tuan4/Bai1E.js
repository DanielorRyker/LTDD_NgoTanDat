import React from 'react';
import { StyleSheet, View, Text, TextInput, Image} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
          <Text style={styles.text1}>login</Text>

            <View style={styles.formLogin}>
                <TextInput style={styles.inputEmail} placeholder="Email" />
            <View style={styles.formMargin}></View>
            <View style={styles.formPassword}>    
                <TextInput style={styles.inputPassword} placeholder="Password" />
                <Image style={styles.iconEye} source={require('./assets/eye 1.png')} />
            </View>
            </View>

            <button style={styles.btnLogin}>LOGIN</button>
            <Text style={styles.text2}>When you agree to terms and conditions</Text>
           <Text style={styles.text3}>For got your password?</Text>
           <Text style={styles.text4}>Or login with</Text>
           
            <View style={styles.Logosocial}>   
            <div style={styles.btnFb}>           
                <Image style={styles.iconFb} source={require('./assets/fb.png')} />
            </div>  

            <div style={styles.btnZl}>     
                <Image style={styles.iconZl} source={require('./assets/zl.png')} /> 
            </div>  

            <div style={styles.btnGg}>
                <Image style={styles.iconGg} source={require('./assets/gg.png')} />
            </div>  
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8EFDE',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        margin:0,
        padding:0,

    },
    text1:{
        marginTop: 40,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 70.31,
        textAlign: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
    },
    formLogin:{
        width: 330,
        marginTop: 40,
        alignItems: 'center',
    },
    inputEmail:{
        width: 330,
        height: 54,
        backgroundColor: '#C9E0D0',
        fontSize: 18,
        lineHeight: 17.58,
        fontFamily: 'Roboto',
        color: '#000000',
        paddingLeft: 20,
        
    },   
    inputPassword:{
        width: 330,
        height: 54,
        backgroundColor: '#C9E0D0',
        fontSize: 18,
        lineHeight: 17.58,
        fontFamily: 'Roboto',
        color: '#000000',
        paddingLeft: 20,
    },
    formPassword:{  
        width: 330,
        backgroundColor: '#C9E0D0',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
    },
    formMargin:{
        marginTop: 20,
    },
    iconEye:{
        width: 38,
        height: 36,
    },
    btnLogin:{
        width: 330,
        height: 45,
        backgroundColor: '#C34E3B',
        marginTop: 60,
        borderRadius: 2,
        color: '#C9E0D0',
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
    },
   text2:{
        marginTop: 18,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 16.41,
        textAlign: 'center',
        alignItems: 'center',
        color: '#000000',
   },
    text3:{
          marginTop: 13,
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 16.41,
          textAlign: 'center',
          alignItems: 'center',
          color: '#5D25FA',
    },
    text4:{
          marginTop: 13,
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 16.41,
          textAlign: 'center',
          alignItems: 'center',
          color: '#000000',
    },
    Logosocial:{
        border: '1px solid #0E88D3',
        width   : 330,
        height: 45,
        marginTop: 30,
        flexDirection: 'row',
    },

    btnFb:{
        backgroundColor: '#275A8D',
        width: 110,
        height: '100%',
    },
    btnGg:{
        width: 110,
        height: '100%',
        
    },
    btnZl:{
        backgroundColor: '#1593C5',
        width: 110,
        height: '100%',
    },


    iconFb:{
        
        backgroundColor: '#275A8D',
        width: 35,
        height: 35,
        left: 31.5,
        top: 2,
    },
    iconGg:{
        width: 35,
        height: 35,
        left: 37.5,
        top: 4,
    },
    iconZl:{
        color: '#ffffff',
        width: 35,
        height: 35,
        left: 37.5,
        top: 4,
    },


});