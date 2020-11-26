import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';



// Class
export class Food extends React.Component {

    constructor(){
        super();
        this.state = {
            newsData: {
                "food": [
                    {
                        "nama": "LEMON HERB ROASTED POTATOES",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083246-1000xauto--resep-western-food.jpg",
                        "harga": "$6,00"
                    },
                    {
                        "nama": "SAPO TAHU",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083248--resep-western-food.jpg",
                        "harga": "$7,00"
                    },
                    {
                        "nama": "CHICKEN CORDON BLEU",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083249-1000xauto--resep-western-food.jpg",
                        "harga": "$9,00"
                    },
                    {
                        "nama": "GARDEN VEGGIE CHICKPAE SANDWICH",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083251-1000xauto--resep-western-food.jpg",
                        "harga": "$8,06"
                    },
                    {
                        "nama": "ROSEMERY CHICKEN WITH SAUTEED VEGATABLES",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083253-1000xauto--resep-western-food.jpg",
                        "harga": "$7,50"
                    },
                    {
                        "nama": "SPICY TUNA ROLL",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083255-1000xauto--resep-western-food.jpg",
                        "harga": "$10,00"
                    },
                    {
                        "nama": "CHICPEA SALAD WITH LEMON, TUNA, AND OLIVES",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083254--resep-western-food.jpg",
                        "harga": "$11,00"
                    },
                    {
                        "nama": "TORI NO TEBA",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083257-1000xauto--resep-western-food.jpg",
                        "harga": "$8,00"
                    },
                    {
                        "nama": "SUN DRIED TOMATO BASIL PASTA",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083258-1000xauto--resep-western-food.jpg",
                        "harga": "$8,25"
                    },
                    {
                        "nama": "SPANISH CHICKPAE",
                        "gambar": "https://cdn-brilio-net.akamaized.net/news/2019/08/19/169174/1083261--resep-western-food.jpg",
                        "harga": "$9,30"
                    }
                ],
            }
        };
    }


    render() {
        const {newsData} = this.state;

        return(
            <ImageBackground source={{uri: 'https://th.bing.com/th/id/OIP.ifqaCACkINNDyT-xGmFEIAHaKs?pid=Api&rs=1'}}
                             style={styles.container}>
                    <FlatList
                        data={newsData.food}
                        style={styles.listStyle}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => {}} style={styles.customCard}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"}}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.gambar
                                        }}/>
                                    <View style={styles.rightContainer}>
                                        <Text
                                            style={{flex: 1, flexWrap: "wrap"}}
                                            numberOfLines={10}
                                            ellipsizeMode={"tail"}>
                                            {item.nama}
                                        </Text>
                                        <Text
                                            style={{
                                                flex: 1,
                                                flexWrap: "wrap",
                                                fontSize: 15,
                                                color: 'gray'}}
                                            numberOfLines={2}
                                            ellipsizeMode={"tail"}>
                                            {item.harga}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 4,
    },
    customCard: {
        elevation: 2,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignSelf: "baseline",
        backgroundColor: 'orange',
    },
    rightContainer: {
        flexDirection: "column",
        flex: 1
    },
    tinyLogo: {
        width: 80,
        height: 80,
        marginRight: 5,
        flex: 0
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    mainContainer: {
        paddingTop: 50
    },
    listStyle: {
        marginTop: 30
    }
});
