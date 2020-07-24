import React from 'react';
import { List } from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import styles from "./style";

class ProductList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      expanded: []
    };
  }

  componentDidMount(){
    this.state.expanded = this.props.categories.map( category => false );
  }

  handlePress(id){
    this.state.expanded[id] = !this.state.expanded[id];
    this.forceUpdate();
  }

  render(){
    return (
      <ScrollView>
        {
          this.props.categories.map(
            (category, idx) =>
              <View key={idx+1}>
                <List.Accordion style={ styles.list_header }
                  title={category.name}
                  expanded={this.state.expanded[idx]}
                  onPress={(e) => this.handlePress(idx)}>
                  {
                    this.props.products.map(
                      (product, idx) => product.category_id == category.id ? <List.Item key={idx+1} style={ styles.list_item }title={product.name} onPress={(e) => this.props.dispatch({type: "DISPLAY_PRODUCT", shownProduct: product}) }/> : null
                    )
                  }
                </List.Accordion>
              </View>
          )
        }
      </ScrollView>
    );
  }
}

export default ProductList;
