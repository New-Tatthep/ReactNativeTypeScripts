import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import ProductList from './Screens/ProductList';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{title: 'Product'}}
      />
      <Stack.Screen name="productList" component={ProductList} />
    </Stack.Navigator>
  );
};

export default Route;
