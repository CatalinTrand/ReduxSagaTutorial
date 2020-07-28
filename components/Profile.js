import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

function Profile(props) {
  return (
    <View>
      <Text style={styles.profile_text}>Username: {props.userData.username}</Text>
      <Text style={styles.profile_text}>Password: {props.userData.password}</Text>
    </View>
  );
}

export default Profile;
