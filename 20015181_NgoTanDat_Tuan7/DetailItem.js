import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function DetailItem({navigation, route }){

    return (
        <View style={styles.container}>
            <View style={styles.header}
            >
                <Image style={styles.imgHeader} source={route.params.img}/>
            </View>
               
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    imgHeader: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
})