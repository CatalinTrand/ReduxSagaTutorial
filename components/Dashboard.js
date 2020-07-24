import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './Profile';
import ProductList from './ProductList';
import styles from "./style";

const Tab = createBottomTabNavigator();

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showingList: true
    };
  }

  render() {
    return (
      <View>
        <View style={styles.tab_nav}>
          <View style={this.state.showingList ? styles.nav_btn_highlight : styles.nav_btn } onPress={(e) => {this.setState({showingList: true})}}>
            <Text style={styles.nav_btn_text}>Products</Text>
          </View>
          <View style={!this.state.showingList ? styles.nav_btn_highlight : styles.nav_btn } onPress={(e) => {this.setState({showingList: false})}}>
            <Text style={styles.nav_btn_text}>Profile</Text>
          </View>
        </View>
        {this.state.showingList ? <ProductList dispatch={this.props.dispatch} categories={this.props.categories} products={this.props.products}/> : <Profile dispatch={this.props.dispatch} userData={this.props.userData}/> }
      </View>
    );
  }
}

export default Dashboard;
