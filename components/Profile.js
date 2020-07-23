import React from 'react';

class Profile extends React.Component {

  render(){
    return (
      <View>
        <Text>Username: {this.props.userData.username}</Text>
        <Text>Password: {this.props.userData.password}</Text>
      </View>
    );
  }
}

export default Profile;
