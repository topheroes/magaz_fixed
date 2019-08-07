import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

import { createStackNavigator, createSwitchNavigator , createAppContainer } from 'react-navigation';
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
    const [data, setData] = useState([]);

    useEffect( async () =>
    {
        console.log(`http://192.168.1.215/wp-json/custom-routes/view_products_by_cat/${props.id}`)
        let resp = await fetch(`http://192.168.1.215/wp-json/custom-routes/view_products_by_cat/${props.id}`);
        console.log("Точна?")
        setData(resp.json());
    });
    console.log('ss')
    return (
        <ScrollView alwaysBounceVertical>
            {data ? data.map((v, i) =>
            {
                return <Item key={i} productData={v}/>;
            }) : <Text>Загрузка...</Text>}
        </ScrollView>
    );
}

const MainNavigator = (props) =>
{
    const [categories, setCategories] = useState(null);
    const [firstTab, setFirstTab] = useState("");
    const [error, setError] = useState(false);

    const navigatorHandler = (cat, header) =>
    {
        let name = cat["name"];

        let route = {}
        route[name] = (props) => <ItemsList {...props} id={cat["id"]}/>

        return createStackNavigator(route, header || {});
    };

    useEffect( async () =>
    {
        let resp = await fetch("http://192.168.1.215/wp-json/custom-routes/products_categories");
        let cats = await resp.json();

        if ( cats["code"] )
            setError(true);
        else
        {
            await cats.shift(); // Первый элемент у нас неопределенные категории. Удаляем

            let categoriesNav = {};
            let isFirst = true;
            
            for ( cat of cats )
            {
                let tab = await navigatorHandler(cat, {headerMode: "none"});

                categoriesNav[cat["id"]] = {
                    screen: tab,
                    navigationOptions: {
                        title: cat["name"],
                        id: cat["id"],
                    }
                };

                if ( isFirst )
                    await setFirstTab(cat["id"]); isFirst = false;
                
            }
            setCategories(categoriesNav);
        }
    }, []);
    
    return categories ? createMaterialBottomTabNavigator(
        categories,
        {
            initialRouteName: firstTab,
            activeColor: '#f0edf6',
            inactiveColor: '#3e2465',
            barStyle: { backgroundColor: '#694fad' },
        })
        : error ? <Text>Произошла ошибка при получении списка товаров</Text>
        : <Text>Загрузка...</Text>;
}

const ItemsListNav = createAppContainer(MainNavigator);
export default ItemsListNav;