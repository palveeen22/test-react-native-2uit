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
        source={{ uri: item.image }}
        style={styles.cardSkeleton}
      />
      <Text style={styles.TextSmall}>{item.title}</Text>
      <Text style={styles.TextSmallGreen}>{item.price}</Text>
      <TouchableOpacity>
        <Text>Add</Text>
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
    backgroundColor: '#808080',
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
});
