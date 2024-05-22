import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ListRenderItem, Image } from 'react-native';
import { TProduct } from '../types/type';
import { useNavigation } from '@react-navigation/native';
import { formattedNumber } from '../libs/utils';


interface ProductCardProps {
  filteredData: TProduct[];
  onAddToCart: (product: TProduct) => void;
  toDetail: (product: TProduct) => void;

}

const ProductCard: React.FC<ProductCardProps> = ({ filteredData, onAddToCart, toDetail }) => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<TProduct> = ({ item }) => (

    <View style={styles.cardContainer}>
      <Image
        source={{ uri: item.image || "https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Package_box-512.png" }}
        style={styles.cardSkeleton}
      />
      <Text style={styles.TextSmall}>{item.title}</Text>
      <Text style={styles.TextSmallGreen}>{formattedNumber(+item.price)}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', rowGap: 10 }}>
        <TouchableOpacity style={styles.ButtonCode} onPress={() => {
          toDetail(item);
        }}>
          <Text style={styles.ButtonTextSmall}>Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonCode} onPress={() => {
          console.log(item.id);
          onAddToCart(item)
        }}>
          <Text style={styles.ButtonTextSmall}>+</Text>
        </TouchableOpacity>
      </View>
    </View >
  );

  return (
    <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: '2.5%',
    alignItems: 'flex-start',
    maxWidth: '45%',
  },
  cardSkeleton: {
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
