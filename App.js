import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

//  Это наши компоненты. 
//  Ваш Кэп.
import Cart from "./components/Cart/main.js";
import ItemsList from "./components/ItemsList/main.js";
import OrderData from "./components/OrderData/main.js";
import Orders from "./components/Orders/main.js";



const Main = createStackNavigator(
    {
        ItemsList: {
            screen: ItemsList,
        },
    },
    {
        headerMode: "none",
    },
);
const CartNav = createStackNavigator(
    {
        Cart: {
            screen: Cart,
        },
        OrderData: {
            screen: OrderData,
        },
    },
    {
        headerMode: "none",
    },
);
const OrdersNav = createStackNavigator(
    {
        Orders: {
            screen: Orders,
        },
    },
    {
        headerMode: "none",
    },
);
const MainNavigator = createMaterialBottomTabNavigator(
{
    ItemsList: {
        screen: Main,
        navigationOptions: {
            title: "Товары",
        },
    },
    Cart: {
        screen: CartNav,
        navigationOptions: {
            title: "Корзина",
        },
    },
    Orders: {
        screen: OrdersNav,
        navigationOptions: {
            title: "Заказы",
        },
    },
},
{
    initialRouteName: 'ItemsList',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});
  
const App = createAppContainer(MainNavigator);
export default App;