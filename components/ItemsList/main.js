import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Item from "./item.js";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ItemsList = (props) =>
{
    return (
        <ScrollView alwaysBounceVertical>
            {props.data.map((v, i) =>
            {
                return <Item key={i} name={v.name} desc={v.desc} price={v.price}/>;
            })}
        </ScrollView>
    );
}

const PenguinsNav = createStackNavigator({ Penguins: 
    (props) => <ItemsList {...props} data={[
        {name:"Пингвин Сранный", desc:"Этот прекрасный пингвин прячет своё тело в утёсах. Смотрите на него чОтварит!", price: 30},
        {name:"Пингвин Убунтовский", desc:"А этот пингвин будет ставит вам Убунту на все устройства, пока вас не будет дома.", price: 40},
    ]}/> },
    {
        headerMode: "none",
    },
);
const DogsNav = createStackNavigator({ Dogs: (props) => <ItemsList {...props} data={[
        {name:"Питербуль терьер", desc:"Буль...", price: 60},
        {name:"Китайская овчарка", desc:"", price: 40},
    ]}/> },
    {
        headerMode: "none",
    },
);
const CatsNav = createStackNavigator({ Cats: (props) => <ItemsList {...props} data={[
        {name:"Кошка лысая", desc:"", price: 30},
        {name:"Кекс", desc:"Напишет вам сайт за еду.", price: 40},
    ]}/> },
    {
        headerMode: "none",
    },
);

const MainNavigator = createMaterialBottomTabNavigator(
{
    Penguins: {
        screen: PenguinsNav,
        navigationOptions: {
            title: "Пингвины",
            data: [
                {name:"Пингвин Сранный", desc:"Этот прекрасный пингвин прячет своё тело в утёсах. Смотрите на него чОтварит!", price: 30},
                {name:"Пингвин Убунтовский", desc:"А этот пингвин будет ставит вам Убунту на все устройства, пока вас не будет дома.", price: 40},
            ],
        },
    },
    Dogs: {
        screen: DogsNav,
        navigationOptions: {
            title: "Собаки",
            data: [
                {name:"Пингвин Сранный", desc:"Этот прекрасный пингвин прячет своё тело в утёсах. Смотрите на него чОтварит!", price: 30},
                {name:"Пингвин Убунтовский", desc:"А этот пингвин будет ставит вам Убунту на все устройства, пока вас не будет дома.", price: 40},
            ],
        },
    },
    Cats: {
        screen: CatsNav,
        navigationOptions: {
            title: "Кошки",
            data: [
                {name:"Пингвин Сранный", desc:"Этот прекрасный пингвин прячет своё тело в утёсах. Смотрите на него чОтварит!", price: 30},
                {name:"Пингвин Убунтовский", desc:"А этот пингвин будет ставит вам Убунту на все устройства, пока вас не будет дома.", price: 40},
            ],
        },
    },
},
{
    initialRouteName: 'Penguins',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});
const ItemsListNav = createAppContainer(MainNavigator);
export default ItemsListNav;