import React from 'react';
import { List } from 'react-native-paper';

class ProductList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      expanded: this.props.categories.map( category => false )
    };
  }

  handlePress(id){
    this.state.expanded[id - 1] = !this.state.expanded[id - 1];
    this.forceUpdate();
  }

  render(){
    return (
      <View>
        {
          this.props.categories.map(
            category =>
              <View>
                <List.Accordion
                  title={category.name}
                  expanded={this.state.expanded[category.id - 1]}
                  onPress={this.handlePress(category.id - 1)}>
                  {
                    this.props.products.map(
                      product => product.category_id == category.id ? <List.Item title={product.name} onPress={(e) => this.props.dispatch({type: "DISPLAY_PRODUCT", shownProduct: product}) }/> : null
                    )
                  }
                </List.Accordion>
              </View>
          )
        }
      </View>
    );
  }
}

export default ProductList;
