import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export type TProducts = {
  id: number;
  title: string;
  product_type: string;
  price: string;
  image: string | undefined;
};

const ProductCard = ({product}: {product: TProducts}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Add to cart')}>
        <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '50%', // Adjust width for a two-column layout with spacing
    margin: '1.5%', // Adjust margin for spacing between cards
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  info: {
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#ff335f',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ProductCard;
