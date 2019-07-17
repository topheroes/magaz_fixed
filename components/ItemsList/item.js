import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Card, Button } from 'react-native-material-ui';
import { Dropdown } from 'react-native-material-dropdown';

const styles = StyleSheet.create({
    container:
    {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    card:
    {
        width: 350,
        maxHeight: 400,
        flexDirection: "row",
    },
    left:
    {
        flex: 1,
        marginLeft: 8,
    },
    leftHeader:
    {
        fontSize: 16,
        margin: 8,
    },
    right:
    {
        flex: 1,
        marginRight: 8,
    },
    bottom:
    {
        flex: 1
    },
    desc:
    {
        margin: 8,
        padding: 8,

        textAlign: "left",

        borderColor: "#333",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 3,
    },
    buy:
    {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: 8,
    },
});

const Item = (props) =>
{
    return (
        <Card>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.left}>
                        <Text style={styles.leftHeader}>{props.name}</Text>
                        <Image
                            style={{width: 66, height: 58}}
                            source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                        />
                    </View>
                    <View style={styles.right}>
                        <Dropdown label="Количество" value="1" data={
                            [
                                { value: "1" },
                                { value: "2" },
                                { value: "3" },
                            ]
                        }/>
                        <Dropdown label="Цвет" value="Церулеум" data={
                            [
                                { value: "Церулеум" },
                                { value: "Розовый" },
                                { value: "Альбинос" },
                            ]
                        }/>
                        <Dropdown label="Размер" value="S" data={
                            [
                                { value: "S" },
                                { value: "M" },
                                { value: "L" },
                                { value: "XL" },
                            ]
                        }/>
                    </View>
                </View>
                
                <View style={styles.bottom}>
                    <Text style={styles.desc}>{props.desc}</Text>
                    <View style={styles.buy}>
                        <Text style={{marginRight:8}}>{`Цена: ${props.price} Септимов`}</Text>
                        <Button primary raised text="Купит!"/>
                    </View>
                </View>
            </View>
        </Card>
    );
}
export default Item;