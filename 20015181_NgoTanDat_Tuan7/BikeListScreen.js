import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import { FlatList } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
const array = [
    {
        img: require("./assets/listBike/bifour_-removebg-preview (1).png"),
        name: "Pinarello",
        price: 1800,
    },

    {
        img: require("./assets/listBike/bitwo-removebg-preview.png"),
        name: "Pina Mountai",
        price: 1700,
    },

    {
        img: require("./assets/listBike/bithree_removebg-preview.png"),
        name: "Pina Bike",
        price: 1500,
    },

    {
        img: require("./assets/listBike/bione-removebg-preview.png"),
        name: "Pinarello",
        price: 1900,
    },

    {
        img: require("./assets/listBike/bithree_removebg-preview.png"),
        name: "Pinarello",
        price: 2700,
    },

    {
        img: require("./assets/listBike/bitwo-removebg-preview.png"),
        name: "Pinarello",
        price: 1350,
    },
]



export default function BikeListScreen({ navigation}) {
    // const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The world’s Best Bike</Text>

            <View style={styles.btnListSort}>
                <TouchableOpacity style={styles.btnAll}>
                    <Text style={styles.btnAllText}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRoadBike}>
                    <Text style={styles.btnRoadBikeText}>RoadBike</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnMountain}>
                    <Text style={styles.btnMountainText}>Mountain</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listBike}>
                <FlatList 
                    data = {array}
                    numColumns = {2}
                    renderItem = {({item}) => {
                        return (
                            <TouchableOpacity style={styles.itemContainer}
                                onPress={() => navigation.navigate("DetailItem", item)}
                            >
                                 <Image style={styles.itemImg} source={item.img}/>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemPrice}>$ {item.price}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
                    
            
            </View>

         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    title: {
        marginTop: 50,
        marginRight: '30%',
        fontSize: 26,
        fontWeight: 700,
        fontFamily: "Ubuntu",
        textAlign: "left",
        color: "red",
    },

    btnListSort: {
        marginTop: 20,
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },

    btnAll: {
        width: 100,
        height: 32,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
    },
    btnRoadBike: {
        width: 100,
        height: 32,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
    },
    btnMountain: {
        width: 100,
        height: 32,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
    },

    itemImg: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },

    itemName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "Ubuntu",
        textAlign: "center",
    },  

    itemPrice: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: "VT323",
        textAlign: "center",
    },

    itemContainer: {
        width: 150,
        height: 200,
        backgroundColor: "#F7E5E4",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
    },

    listBike: {
        marginTop: 20,
        width: "100%",
        height: "100%",
        alignItems: "center",
    },

});
