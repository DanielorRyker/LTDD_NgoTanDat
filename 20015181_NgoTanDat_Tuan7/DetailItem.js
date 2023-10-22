import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function DetailItem({navigation, route }){

    return (
        <View style={styles.container}>
            <View style={styles.header}
            >
                <Image style={styles.imgHeader} source={route.params.img}/>
            </View>

            <View style={styles.nameItem}>
                <Text style={styles.nameItemText}>{route.params.name}</Text>
            </View>

            <View style={styles.priceItem}>
                <Text style={styles.Sale}>15% OFF {route.params.price}$</Text>
                <Text>     </Text>
                <Text style={styles.priceSale}>{route.params.price * 0.15}$</Text>
            </View>
               

        <Text style={styles.desc}>Description</Text>
        <Text style={styles.descText}>It is a very important form of writing as <br/>we write almost everything in <br/>paragraphs, be it an answer, essay, story, <br/>emails, etc.</Text>
            
        <View style={styles.btn}>
            <TouchableOpacity style={styles.btnFavorite}>
                <Image style={styles.imgFavorite} source={require('./assets/akar-icons_heart.png')}/>
            </TouchableOpacity>
         <TouchableOpacity style={styles.btnBuy}
            onPress={() => navigation.navigate("BikeListScreen")}
         >
            <Text style={styles.btnBuyText}>Add to card</Text>
            </TouchableOpacity>
        </View>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
       flex: 1,
         alignItems: "center",
    },

    header: {
        marginTop: 10,
        width: 359,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7E5E4",
        borderRadius: '5%',
    },

    imgHeader: {
        width: 247,
        height: 300,
        resizeMode: "contain",
    },

    nameItem: {
        marginTop: 10,
        marginRight: '55%',
        resizeMode: "contain",
    },

    nameItemText: {
        fontSize: 35,
        fontWeight: 400,
        fontFamily: "Voltaire",
        textAlign: "left",
        color: "red",
    },

    priceItem: {
        marginTop: 10,
        marginRight: '16%',
        flexDirection: "row",
       

    },

    Sale: {
        fontSize: 25,
        fontWeight: 400,
        fontFamily: "Voltaire",
        textAlign: "left",
        color: "#696969",
    },

    priceSale: {
        fontSize: 25,
        fontWeight: 400,
        fontFamily: "Voltaire",
        textDecorationLine: 'line-through',
    },

    desc: {
        marginTop: 10,
        fontSize: 26,
        fontWeight: 700,
        fontFamily: "Ubuntu",
        textAlign: "left",
        marginRight: '55%',
           },

    descText: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 400,
        fontFamily: "Ubuntu",
        color: 'rgba(0, 0, 0, 0.57)',
    },

    btn: {
        marginTop: '10%',
        marginRight: '10%',
        width: 359,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    imgFavorite: {
        width: 35,
        height: 35,
        resizeMode: "contain",
    },

    btnBuy: {
        width: 200,
        height: 50,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    btnBuyText: {
        color: "#fff",
        fontSize: 27,
        fontWeight: 400,
        fontFamily: "VT323",
    },

})