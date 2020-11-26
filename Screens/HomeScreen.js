import {View, StyleSheet, Text, Image, ImageBackground} from "react-native";
import * as React from "react";


export function HomeScreen ({}) {
    return (
        <ImageBackground source={{uri: 'https://th.bing.com/th/id/OIP.ifqaCACkINNDyT-xGmFEIAHaKs?pid=Api&rs=1'}}
                         style={styles.container}>
            <View style={styles.container}>
                <Text style={[styles.welcome, styles.biggreen]}>
                    Welcome to Our Restaurant
                </Text>
                <Image
                    style={{width: 50, height: 50}}
                    resizeMode="contain"
                    source={{ uri: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png' }}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontSize: 30,
    },
});