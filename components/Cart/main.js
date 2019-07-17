import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Cart = (props) =>
{
    const { navigation } = props;
    return (
        <View>
            <Text onPress={()=>{
                navigation.navigate("OrderData")
            }}>Cart</Text>
        </View>
    );
}

export default Cart;