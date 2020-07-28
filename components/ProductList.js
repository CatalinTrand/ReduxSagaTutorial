import React, {useState} from 'react';
import { List } from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import styles from "./style";

const handlePress = (id, data, setData) => {
  data.expanded[id] = !data.expanded[id];
  setData({expanded: data.expanded});
};

function ProductList(props) {

  const [data, setData] = useState(
    {
      expanded: props.categories.map( category => false )
    }
  );

  console.log(data);

  return (
      <ScrollView>
        {
          props.categories.map(
            (category, idx) =>
              <View key={idx+1}>
                <List.Accordion style={ styles.list_header }
                  title={category.name}
                  expanded={data.expanded[idx]}
                  onPress={(e) => handlePress(idx, data, setData)}>
                  {
                    props.products.map(
                      (product, idx) => product.category_id == category.id ? <List.Item key={idx+1} style={ styles.list_item } title={product.name} onPress={(e) => props.dispatch({type: "DISPLAY_PRODUCT", shownProduct: product}) }/> : null
                    )
                  }
                </List.Accordion>
              </View>
          )
        }
      </ScrollView>
    );
}

export default ProductList;
