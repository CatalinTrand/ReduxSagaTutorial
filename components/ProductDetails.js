import React from 'react';

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
