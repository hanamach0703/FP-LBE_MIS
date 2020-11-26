import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from "./Screens/HomeScreen";
import {AboutScreen} from "./Screens/AboutScreen";
import {NewsScreen} from "./Screens/NewsScreen";
import {Drink} from "./Screens/Drink";
import {Dessert} from "./Screens/Dessert";
import {Food} from "./Screens/Food";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="My Application">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Food" component={Food} />
                <Drawer.Screen name="Drink" component={Drink} />
                <Drawer.Screen name="Dessert" component={Dessert} />
                <Drawer.Screen name="News" component={NewsScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}