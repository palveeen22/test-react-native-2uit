import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ListRenderItem, Image } from 'react-native';
import { TProduct } from '../types/type';


// Define the props type for the ProductCard component
interface ProductCardProps {
  data: TProduct[];
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const renderItem: ListRenderItem<TProduct> = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: item.image || "https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Package_box-512.png" }}
        style={styles.cardSkeleton}
      />
      <Text style={styles.TextSmall}>{item.title}</Text>
      <Text style={styles.TextSmallGreen}>{item.price}</Text>
      <TouchableOpacity style={styles.ButtonCode} onPress={() => {
        console.log("in");
      }}>
        <Text style={styles.ButtonTextSmall}>Apply</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      // contentContainerStyle={styles.gridCard}
      numColumns={2}
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  // gridCard: {
  //   // paddingHorizontal: '2.5%',
  //   // paddingVertical: 10,
  // },
  cardContainer: {
    flex: 1,
    margin: '2.5%',
    alignItems: 'flex-start',
    maxWidth: '45%',
  },
  cardSkeleton: {
    // backgroundColor: '#808080',
    height: 200,
    width: '100%',
    borderRadius: 12,
    objectFit: 'cover'
  },
  TextSmall: {
    fontSize: 14,
  },
  TextSmallGreen: {
    fontSize: 13,
    color: '#32CD32',
  },
  ButtonCode: {
    marginTop: 10,
    backgroundColor: '#32CD32',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14
  },
  ButtonTextSmall: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
