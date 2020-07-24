import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from "./style";

class ProductDetails extends React.Component {

  onBackPress(){
    this.props.dispatch({type: "AUTHENTICATE_ASYNC", userData: this.props.userData});
  }

  render(){
    return (
      <View>
        <Text style={styles.product_title}>{this.props.shownProduct.name}</Text>
        <Text style={styles.product_price}>{this.props.shownProduct.price}$</Text>
        <Text style={styles.product_description}>{this.props.shownProduct.description}</Text>
        <Button
          onPress={() => this.onBackPress()}
          title="Back to list"
        />
      </View>
    );
  }
}

export default ProductDetails;
