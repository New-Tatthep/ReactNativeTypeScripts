import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export interface IItem {
  product: string;
  description: string;
  price: string;
}
interface Props {
  setProductList: React.Dispatch<React.SetStateAction<IItem[]>>;
  productList: IItem[];
}
const AddProduct: React.FC<Props> = ({productList, setProductList}) => {
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const addItem = () => {
    if (!product || !description || !price) {
      Alert.alert('No Item!', 'You need to enter an item');
    }
     else {
      setProductList([
        ...productList,
        {
          product,
          description,
          price: price || '1',
        },
      ]);
      setProduct('');
      setDescription('');
      setPrice('');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Add Product Item</Text>
      {/* <Button onPress={()=> {navigation.navigate('ProductList')}}></Button> */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter Product Name"
          value={product}
          onChangeText={text => setProduct(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Description"
          value={description}
          onChangeText={q => {
            setDescription(q);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Price"
          keyboardType="numeric"
          value={price}
          onChangeText={Price => {
            setPrice(Price);
          }}
        />
        <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddProduct;
