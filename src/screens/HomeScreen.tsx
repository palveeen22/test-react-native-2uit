import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextCustom } from '../styles/texts/texts';
import ProductCard, { TProducts } from '../components/ProductCard';

const HomeScreen = ({ navigation }): React.ReactElement => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Все' },
    { id: 2, name: 'Тип 1' },
    { id: 3, name: 'Тип 2' },
    // ... tambahkan kategori lainnya
  ]);

  // Sample data
  const products: TProducts[] = [
    {
      id: 1,
      title: 'Product 1',
      product_type: 'Type A',
      price: '1000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Product 2',
      product_type: 'Type B',
      price: '2000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Product 3',
      product_type: 'Type C',
      price: '3000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Product 3',
      product_type: 'Type C',
      price: '3000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Product 3',
      product_type: 'Type C',
      price: '3000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Product 3',
      product_type: 'Type C',
      price: '3000',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  return (
    <View style={HomeScreenStyles.container}>
      <SafeAreaView>
        <View style={HomeScreenStyles.HeaderContainer}>
          <TextInput
            style={HomeScreenStyles.TextInput}
            placeholder="Type here"
          />
          <Text
            style={TextCustom.Size1}
            onPress={() => {
              navigation.navigate('Chart Screen');
            }}>
            🛒
          </Text>
          <Text
            style={TextCustom.Size1}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            🧑🏼‍🦱
          </Text>
        </View>
        <View style={HomeScreenStyles.ContainerCard} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCategorySelect(item)}>
              <View
                style={{
                  backgroundColor:
                    selectedCategory === item ? '#141414' : '#fff',
                  padding: 10,
                  borderRadius: 15,
                  margin: 5,
                  borderColor: '#141414',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: selectedCategory === item ? '#fff' : '#141414',
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
        {/* <View style={HomeScreenStyles.HeaderContainer}>
          <Text style={TextCustom.Size1}>Sale</Text>
          <Text style={TextCustom.Size1}>🛒</Text>
        </View> */}
        {/* <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={HomeScreenStyles.gridCard}
          numColumns={2}
        /> */}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  containerFull: {
    flex: 1,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  ContainerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141414',
    marginTop: 30,
    padding: 15,
    width: '100%',
    borderRadius: 15,
  },
  TextInput: {
    flex: 1,
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 20,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  gridCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
