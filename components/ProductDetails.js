import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

class ProductDetails extends React.Component {

  onBackPress(){
    this.props.dispatch({type: "AUTHENTICATE_ASYNC"});
  }

  render(){
    return (
      <View>
        <Text>{this.props.shownProduct.name} {this.props.shownProduct.price}$</Text>
        <Text>{this.props.shownProduct.description}</Text>
        <Button
          onPress={() => this.onBackPress()}
          title="Back to list"
        />
      </View>
    );
  }
}

export default ProductDetails;
