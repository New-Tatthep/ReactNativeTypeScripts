import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import Header from '../components/Header';
import AddItem, {IItem} from '../components/AddProducts';
import Item from '../components/Item';

//ReactNavigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = () => {
  const [productList, setProductList] = useState<IItem[]>([]);
  return (
      <AddItem setProductList={setProductList} productList={productList} />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default HomeScreen;
