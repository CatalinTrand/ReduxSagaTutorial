import React from 'react';
import {Text, View} from 'react-native';
import styles from "./style";

class Profile extends React.Component {

  render(){
    return (
      <View>
        <Text style={styles.profile_text}>Username: {this.props.userData.username}</Text>
        <Text style={styles.profile_text}>Password: {this.props.userData.password}</Text>
      </View>
    );
  }
}

export default Profile;
