import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {IItem} from '../components/AddProducts';
import Item from '../components/Item';

const ProductList = () => {
  const [productList] = useState<IItem[]>([]);
  return (
    <ScrollView style={{margin: 10, marginBottom: 50}}>
      <FlatList
        data={productList}
        keyExtractor={(item, index) => `${item.product}-${index}`}
        renderItem={({item}) => (
          <Item
            product={item.product}
            description={item.description}
            price={item.price}
          />
        )}
      />
    </ScrollView>
  );
};

export default ProductList;
