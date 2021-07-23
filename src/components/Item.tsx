import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IItem} from './AddProducts';
const Item: React.FC<IItem> = ({product, description, price}) => {
  return (
    <View style={styles.item}>
      <View style={styles.rowDisplay}>
        <Text style={styles.itemName}>{product}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.price}>{price} ฿</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  rowDisplay:{
      flexDirection:'column'
  },
  itemName: {
    fontWeight: '500',
  },
  description: {
    fontWeight: '500',
    color: '#646262',
  },
  price: {
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});
export default Item;
