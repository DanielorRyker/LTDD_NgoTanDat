import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <Text style={styles.desc}>
        A premium online store for <br/> sporter and their stylish choice
        </Text>
        <View style={styles.imageContainer}>
        <Image style={styles.img} source={require('./assets/bifour_-removebg-preview.png') }/>
        </View>
        <Text style={styles.title}>
            POWER BIKE <br/> SHOP
        </Text>
        <TouchableOpacity style= {styles.btnStart}>
            <Text style={styles.btnStartText}>Get Started</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    desc: {
        marginTop: 50,
        fontSize: 26,
        color: "#000",
        textAlign: "center",
        fontFamily: "VT323",
        fontWeight: 400,
        textAlign: "center",
    },

    imageContainer: {
        marginTop  : 20,
        width: 359,
        height: 388,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7E5E4",
        borderRadius: '20%',
    },

    img: {
        width: "70%",
        height: "70%",
        resizeMode: "contain",
    },

    title: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: 700,
        fontFamily: "Ubuntu",
        textAlign: "center",
    },

    btnStart: {
        marginTop: 10,
        width: '90%',
        height: 50,
        backgroundColor: "red",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    btnStartText: {
        color: "#fff",
        fontSize: 27,
        fontWeight: 400,
        fontFamily: "VT323",
    },



});