import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//
//  Это наши компоненты. 
//  Ваш Кэп.
import Cart from "./components/Cart/main.js";
import ItemsList from "./components/ItemsList/main.js";
import OrderData from "./components/OrderData/main.js";
import Orders from "./components/Orders/main.js";

export default function App() {
    return (
        <View style={styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
