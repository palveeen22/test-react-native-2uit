import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TProduct } from '../types/type';
import { formattedNumber } from '../libs/utils';

interface DetailProp {
    id: number;
}

const DetailProductScreen: React.FC<DetailProp> = ({ id }) => {
    const route = useRoute<RouteProp<Record<string, DetailProp>, string>>();
    const paramId = route.params?.id;
    const [data, setData] = useState<TProduct | null>(null);
    const navigation = useNavigation();



    const handleBackPress = () => {
        navigation.goBack();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/${paramId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    console.log(data, "<<<");

    return (
        <SafeAreaView style={styles.SafeAreaContainer}>
            <View style={styles.SafeAreaContainer}>
                <Image
                    source={{ uri: data?.image || "https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Package_box-512.png" }}
                    style={styles.ImageStyle}
                />
                <View style={styles.Header}>
                    <TouchableOpacity onPress={handleBackPress}>
                        <Text style={styles.TextSmall}>⬅️</Text>
                    </TouchableOpacity>
                    <Text style={styles.TextSmallGreen}>See all</Text>
                </View>
                <View style={styles.ContainerDetail}>
                    <Text style={styles.TextMediumGreen}>{data?.product_type}</Text>
                    <View style={styles.BetweenPosition}>
                        <Text style={styles.TextTitle}>{data?.title}</Text>
                        <Text style={styles.TextSmallGreen}>{formattedNumber(data?.price)}</Text>
                    </View>
                    <View style={styles.BottomButtonContainer}>
                        <TouchableOpacity style={styles.Button}
                            onPress={() => {
                                console.log("in");
                            }}
                        >
                            <Text style={styles.ButtonText}>Proceed To Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DetailProductScreen;

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
    },
    ContainerDetail: {
        borderTopColor: "black",
        borderTopWidth: 0.5,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: "column",
        height: 500
    },
    ImageStyle: {
        width: '100%',
        height: 500,
    },
    Header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
        zIndex: 10,
    },
    TextSmall: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    TextTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
    },
    TextSmallGreen: {
        fontSize: 14,
        color: '#32CD32',
    },
    TextMediumGreen: {
        fontSize: 16,
        color: '#32CD32',
        fontWeight: '500',

    },
    BetweenPosition: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    BottomButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    Button: {
        backgroundColor: '#32CD32',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: '100%'
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
