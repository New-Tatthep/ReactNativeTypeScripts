import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TextInput,
  Button,
  RefreshControl,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Header from './src/components/Header';
import AddProduct, {IItem} from './src/components/AddProducts';
import Item from './src/components/Item';

//ReactNavigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import index from './src';

const App = () => {
  //function Product List Props
  const [productList, setProductList] = useState<IItem[]>([]);

  //setDataToApiList
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [dataSource, setDataSource] = useState([]);
  console.log(data);

  useEffect(() => getData(), []);
  const getData = () => {
    console.log('getData');
    setLoading(true);
    //Service to get the data from the server to render
    fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + offset)
      //Sending the currect offset with get request
      .then(response => response.json())
      .then(responseJson => {
        setOffset(offset + 1);
        setDataSource([...dataSource, ...responseJson.results]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {isLoading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  //pullRefreshSet
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setDataSource([]);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add_Product" />
      <View>
        <ScrollView
          style={{margin: 10, marginBottom: 50}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <AddProduct
            setProductList={setProductList}
            productList={productList}
          />
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
          <View style={{flex: 1, padding: 24}}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              <View style={styles.container}>
                <FlatList
                  data={dataSource}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={ItemSeparatorView}
                  enableEmptySections={true}
                  renderItem={ItemView}
                  ListFooterComponent={renderFooter}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentname: {
    marginTop: -20,
    padding: 20,
  },
  contentemail: {
    marginTop: -40,
    padding: 20,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
export default App;
