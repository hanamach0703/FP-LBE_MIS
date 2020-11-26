import {StyleSheet, View, Text, Image} from "react-native";
import * as React from "react";

export function AboutScreen({}) {
    return (
        <View style={styles.container}>
            <Text> </Text>
            <Text style={[styles.welcome, styles.biggreen]}>
                  Restaurant By
            </Text>
            <Text> </Text>
            <Image
                style={{width: 200, height: 200}}
                resizeMode="contain"
                source={{ uri: 'https://i.pinimg.com/originals/a5/6e/16/a56e16e708edb20634c6b04c37532a1e.jpg' }}
            />
            <Text style={[styles.instructions, styles.skyblue]}>
                Hana Machmudah
            </Text>
            <Text> </Text>
            <Text> </Text>
            <Image
                 style={{width: 200, height: 200}}
                 resizeMode="contain"
                 source={{ uri: 'https://image.freepik.com/free-vector/little-bakery-girl-chef-s-logo-is-happy-tasty-sweet-smile_105783-157.jpg' }}
            />
            <Text style={[styles.instructions, styles.skyblue]}>
                Aprilia Annisa Suryo
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    welcome:{
         fontSize: 20,
         textAlign: 'center',
         margin: 10
    },
    instructions:{
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    biggreen: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
     },
    skyblue: {
       color: 'white',
       fontSize: 15,
    },
 });