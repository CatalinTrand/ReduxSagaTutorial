import React from 'react';
import {
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './Profile';
import ProductList from './ProductList';

const Tab = createBottomTabNavigator();

class Dashboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      TabNav: createBottomTabNavigator()
    }
  }

  onProductClick(){
    this.props.dispatch({type: "DISPLAY_PRODUCT", shownProduct: null });
  }

  render() {
    return (
      <View>
        <Tab.Navigator
          initialRouteName="ProductList"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="ProductList"
            component={ProductList}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }

}

export default Dashboard;
