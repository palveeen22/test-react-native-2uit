import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View, Text, Image } from 'react-native';
import { TCart, TProduct } from '../types/type';

interface CartProductCard {
    data: TProduct[]
}

const CartCard: React.FC<CartProductCard> = ({ data }) => {
    const renderItem: ListRenderItem<TProduct> = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.HeaderStart}>
                <Image
                    source={{ uri: item.image || "https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Package_box-512.png" }}
                    style={styles.Box1}
                />
                <View style={styles.Box2}>
                    <Text style={styles.TextSmall}>{item.title}</Text>
                    <View style={styles.Box2Card}>
                        <Text style={styles.TextSmall}>{item.product_type}</Text>
                        <Text style={styles.TextMediumBlack}>{item.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}  // Set numColumns to 1 for a single column
        />
    );
};

export default CartCard;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    HeaderStart: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        gap: 15,
        backgroundColor: '#e3e3e3',
        borderRadius: 18,
        paddingHorizontal: 10

    },
    Box1: {
        // backgroundColor: '#808080',
        height: 120,
        width: '35%',
        borderRadius: 12,
    },
    Box2: {
        height: 120,
        width: '60%',
        borderRadius: 12,
        marginVertical: 10,
        justifyContent: 'flex-start',
        padding: 10,
    },
    Box2Card: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    TextSmall: {
        fontSize: 16,
        fontWeight: '600',
    },
    TextMediumBlack: {
        fontSize: 14,
        color: '#3E414C',
        fontWeight: '600',
    },
});
