import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import Profile from './Profile';
import ProductList from './ProductList';
import {Drawer} from 'react-navigation';
import styles from './style';


function Dashboard(props) {

  const [data, setData] = useState(
    {
      showingList: true,
    },
  );

  return (
    <View>
      <View style={styles.tab_nav}>
        <View style={data.showingList ? styles.nav_btn_highlight : styles.nav_btn}
              onStartShouldSetResponder={(e) => {
                setData({showingList: true});
              }}>
          <Text style={styles.nav_btn_text}>Products</Text>
        </View>
        <View style={!data.showingList ? styles.nav_btn_highlight : styles.nav_btn}
              onStartShouldSetResponder={(e) => {
                setData({showingList: false});
              }}>
          <Text style={styles.nav_btn_text}>Profile</Text>
        </View>
      </View>
      <View>
        {
          data.showingList ?
            <ProductList dispatch={props.dispatch} categories={props.categories} products={props.products}/> :
            <Profile dispatch={props.dispatch} userData={props.userData}/>
        }
      </View>
    </View>
  );
}

export default Dashboard;
