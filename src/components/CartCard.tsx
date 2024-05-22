import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View, Text, Image } from 'react-native';
import { TCart, TProduct } from '../types/type';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { formattedNumber } from '../libs/utils';

interface CartProductCard {
    data: TProduct[]
    onDelete: (id: number) => void;
}

const CartCard: React.FC<CartProductCard> = ({ data, onDelete }) => {
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
                        <Text style={styles.TextMediumBlack}>{formattedNumber(+item.price)}</Text>
                    </View>
                    <TouchableOpacity style={styles.ButtonCode} onPress={() => {
                        onDelete(item.id)
                    }}>
                        <Text style={styles.ButtonTextSmall}>отменить</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
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
        flexDirection: "column",
        justifyContent: 'space-between',
        gap: 5
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
    ButtonCode: {
        marginTop: 10,
        backgroundColor: '#ff335f',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14,
    },
    ButtonTextSmall: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
});
