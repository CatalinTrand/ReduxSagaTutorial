import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import styles from './style';

const onBackPress = (props) => {
  props.dispatch({type: 'AUTHENTICATE_ASYNC', userData: props.userData});
};

const handleChange = (e, setData) => {
  setData({visible: true, comment: e});
};

const saveComment = () => {
  //TODO
};

function ProductDetails(props) {

  const [data, setData] = useState(
    {
      visible: false,
      comment: '',
    },
  );

  return (
    <View>
      <Dialog
        visible={data.visible}
        onTouchOutside={() => {
          setData({visible: false, comment: ''});
        }}
      >
        <DialogContent>
          <TextInput
            placeholder="Comment here..."
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={(e) => handleChange(e, setData)}
            value={data.comment}
          />
          <Button
            onPress={() => {
              saveComment();
            }}
            title="Save"
          />
        </DialogContent>
      </Dialog>
      <Text style={styles.product_title}>{props.shownProduct.name}</Text>
      <Text style={styles.product_price}>{props.shownProduct.price}$</Text>
      <Text style={styles.product_description}>{props.shownProduct.description}</Text>

      <View style={styles.review_btn}>
        <Button
          onPress={() => {
            setData({visible: true, comment: ''});
          }}
          title="Leave a review"
        />
      </View>

      <Text style={styles.reviews_title}>Reviews:</Text>
      <View style={styles.reviews_box}>
        {
          props.shownProduct.reviews.map(
            (review, idx) =>
              <View key={idx+1} style={styles.review}>
                <Text style={styles.review_name}>{review.username} has commented:</Text>
                <Text style={styles.review_comment}>{review.comment}</Text>
              </View>,
          )
        }
      </View>

      <Button
        onPress={() => onBackPress(props)}
        title="Back to list"
      />
    </View>
  );
}

export default ProductDetails;
