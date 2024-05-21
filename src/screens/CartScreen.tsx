import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { TCart } from '../types/type';
import CartCard from '../components/CartCard';
import { useNavigation } from '@react-navigation/native';

const ChartScreen = () => {
    const snapPoints = useMemo(() => ['40%'], []);
    const [data, setData] = useState<TCart[]>([])
    const navigation = useNavigation();


    const handleBackPress = () => {
        navigation.goBack();
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3000/carts');
    //             const json = await response.json();
    //             setData(json);
    //             // setIsLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // console.log(data, "<<<");


    return (
        <SafeAreaView style={styles.SafeAreaContainer}>
            <GestureHandlerRootView style={styles.SafeAreaContainer}>
                <View style={styles.Container}>
                    <View style={{ height: '60%' }}>
                        <View style={styles.Header}>
                            <TouchableOpacity style={styles.Side} onPress={handleBackPress}>
                                <Text style={styles.TextSmall}>⬅️</Text>
                            </TouchableOpacity>
                            <View style={styles.Center}>
                                <Text style={styles.TextSmall}>My Cart</Text>
                            </View>
                            <View style={styles.Side}>
                                <Text style={styles.TextSmallGreen}>See all</Text>
                            </View>
                        </View>
                        <CartCard data={data} />
                    </View>
                    <BottomSheet snapPoints={snapPoints}>
                        <View style={styles.BottomSheetContent}>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.Input}
                                    placeholder="Promo Code"
                                    placeholderTextColor="#888"
                                />
                                <TouchableOpacity style={styles.ButtonCode}
                                    onPress={() => {
                                        console.log("in");
                                    }}
                                >
                                    <Text style={styles.ButtonTextSmall}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.HeaderBottom}>
                                <Text style={styles.TextSmallGrey}>Sub-total</Text>
                                <Text style={styles.TextMediumBlack}>$1.890</Text>
                            </View>
                            <View style={styles.HeaderBottom}>
                                <Text style={styles.TextSmallGrey}>Delivery Fee</Text>
                                <Text style={styles.TextMediumBlack}>$70</Text>
                            </View>
                            <View style={styles.HeaderBottom}>
                                <Text style={styles.TextMediumBlack}>Total Cost</Text>
                                <Text style={styles.TextMediumGreen}>$1960</Text>
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
                    </BottomSheet>
                </View>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
};

export default ChartScreen;

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
    },
    Container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    Header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    Side: {
        flex: 1,
        alignItems: 'center',
    },
    Center: {
        flex: 2,
        alignItems: 'center',
    },
    TextSmall: {
        fontSize: 16,
        fontWeight: '600',
    },
    TextSmallGreen: {
        fontSize: 14,
        color: '#32CD32',
    },
    TextMediumGreen: {
        fontSize: 14,
        color: '#32CD32',
        fontWeight: '600',
    },
    BottomSheetContent: {
        padding: 20,
    },
    TextSmallGrey: {
        fontSize: 14,
        color: '#838799',
        fontWeight: '400',
    },
    TextMediumBlack: {
        fontSize: 14,
        color: '#3E414C',
        fontWeight: '600',
    },
    HeaderBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 12,
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
    ButtonTextSmall: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    Box1: {
        backgroundColor: '#808080',
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
    HeaderStart: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        paddingVertical: 10,
        gap: 15
    },
    InputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 4,
    },
    Input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        padding: 5
    },
    ButtonCode: {
        backgroundColor: '#32CD32',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14
    }
});
