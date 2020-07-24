import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import styles from './style';

class ProductDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      comment: ""
    };
  }

  onBackPress() {
    this.props.dispatch({type: 'AUTHENTICATE_ASYNC', userData: this.props.userData});
  }

  handleChange(e){
    this.setState({comment: e});
  }

  saveComment(){
    //TODO
  }

  render() {
    return (
      <View>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <TextInput
              placeholder="Comment here..."
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={(e) => this.handleChange(e)}
              value={this.state.comment}
            />
            <Button
              onPress={() => {this.saveComment()} }
              title="Save"
            />
          </DialogContent>
        </Dialog>
        <Text style={styles.product_title}>{this.props.shownProduct.name}</Text>
        <Text style={styles.product_price}>{this.props.shownProduct.price}$</Text>
        <Text style={styles.product_description}>{this.props.shownProduct.description}</Text>

        <View style={styles.review_btn}>
          <Button
            onPress={() => {this.setState({visible: true})} }
            title="Leave a review"
          />
        </View>

        <Text style={styles.reviews_title}>Reviews:</Text>
        <View style={styles.reviews_box}>
          {
            this.props.shownProduct.reviews.map(
              review =>
                <View style={styles.review}>
                  <Text style={styles.review_name}>{review.username} has commented:</Text>
                  <Text style={styles.review_comment}>{review.comment}</Text>
                </View>,
            )
          }
        </View>

        <Button
          onPress={() => this.onBackPress()}
          title="Back to list"
        />
      </View>
    );
  }
}

export default ProductDetails;
