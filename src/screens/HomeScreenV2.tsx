import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';
import { TProduct } from '../types/type';
import NoData from '../components/NoData';

type TProps = {
    navigation: any;
};

const HomeScreenV2 = ({ navigation }: TProps): React.ReactElement => {
    const [data, setData] = useState<TProduct[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [cartItems, setCartItems] = useState<TProduct[]>([]);
    const [isSortedByPrice, setIsSortedByPrice] = useState<boolean>(false);

    const filterProducts = () => {
        return data.filter(product =>
            product.title.toLowerCase().includes(searchText.toLowerCase()),
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        navigation.setParams({ cartItemCount: cartItems.length });
    }, [cartItems]);

    const postToCart = async (product: TProduct) => {
        try {
            const response = await fetch('http://localhost:3000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            const json = await response.json();
            setCartItems(prevCartItems => [...prevCartItems, json]);
        } catch (error) {
            console.error('Error posting data to cart:', error);
        }
    };

    const HandleToDetails = (product: TProduct) => {
        navigation.navigate("ProductDetail", { id: product.id });
        console.log(product.id);
    };

    const handleAddToCart = (product: TProduct) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <SafeAreaView style={styles.SafeAreaContainer}>
            <View style={styles.Container}>
                <Text style={styles.TextMedium}>👋🏼 Привет!</Text>
                <View style={styles.HeaderInput}>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.Input}
                            placeholder="Найти...."
                            placeholderTextColor="#888"
                            onChangeText={text => setSearchText(text)}
                            value={searchText}
                        />
                        <Text style={styles.TextMedium}>🔍</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Chart Screen');
                    }}>
                        <View style={styles.CartComponent}>
                            <Text style={styles.TextMedium}>🛒 {cartItems.length}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.Header}>
                    <Text style={styles.TextSmall}>Categories</Text>
                    <Text style={styles.TextSmallGreen}>See all</Text>
                </View>
                {filterProducts().length > 0 ? (
                    <ProductCard
                        filteredData={filterProducts()}
                        onAddToCart={handleAddToCart}
                        toDetail={HandleToDetails}
                        postToCart={postToCart}
                    />
                ) : (
                    <NoData text='не найден' />
                )}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreenV2;

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
    },
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        gap: 20,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    HeaderInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    TextMedium: {
        fontSize: 18,
    },
    TextSmall: {
        fontSize: 16,
        fontWeight: '600',
    },
    TextSmallGreen: {
        fontSize: 14,
        color: '#32CD32',
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
        padding: 5,
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
