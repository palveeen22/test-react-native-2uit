import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated, SafeAreaView, Text, View, TextInput, FlatList, TouchableOpacity, useWindowDimensions, Button, TouchableOpacityBase, ScrollView } from 'react-native';
import ProductCard, { CardData } from '../components/ProductCard';
import { TProduct } from '../types/type';

interface ItemProps {
    key: string;
    title: string;
    description: string;
}


const HomeScreenV2 = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Все' },
        { id: 2, name: 'Тип 1' },
        { id: 3, name: 'Тип 2' },
    ]);


    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category: any) => {
        setSelectedCategory(category);
    };


    const [cards, setCards] = useState([
        { id: '1', title: 'Card 1', price: 12000 },
        { id: '2', title: 'Card 2', price: 21000 },
        { id: '3', title: 'Card 2', price: 21000 },

    ]);

    const [data, setData] = useState<TProduct[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const json = await response.json();
                setData(json);
                // setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    console.log(data, "<<<");

    return (
        <SafeAreaView style={styles.SafeAreaContainer}>
            <View style={styles.Container}>
                <View style={styles.HeaderInput}>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.Input}
                            placeholder="Input here.."
                            placeholderTextColor="#888"
                        />
                        <Text style={styles.TextMedium}>🔍</Text>
                    </View>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.CartComponent}>
                            <Text style={styles.TextMedium}>🛒</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.Header}>
                    <Text style={styles.TextSmall}>Categories</Text>
                    <Text style={styles.TextSmallGreen}>See all</Text>
                </View>
                <ProductCard data={data} />
            </View>
        </SafeAreaView >
    );
}

export default HomeScreenV2;

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
    },
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        gap: 20
    },
    Header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    HeaderInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    TextMedium: {
        fontSize: 18
    },
    TextSmall: {
        fontSize: 16,
        fontWeight: '600',
    },
    TextSmallGreen: {
        fontSize: 14,
        color: '#32CD32'
    },
    InputContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 4,
    },
    CartComponent: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    Input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        padding: 5
    },
    icon: {
        marginRight: 10,
    },
    gridCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    cardContainer: {
        width: '45%',
        margin: '2.5%',
        alignItems: 'flex-start',
    },
    cardSkeleton: {
        backgroundColor: '#808080',
        height: 120,
        width: '100%',
        borderRadius: 12,
    },
});
