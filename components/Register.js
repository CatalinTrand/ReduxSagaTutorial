import React from 'react';
import {
  View,
} from 'react-native';
import {connect} from "react-redux";
import {Text, TextInput} from 'react-native';
import styles from "./style";
import {Button} from 'react-native-elements';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange(event = {}, from) {
    if(from == 'u')
      this.setState({username: event});
    else
      this.setState({password: event});
  }

  onRegisterPress(){
    this.props.dispatch({type: "REGISTER", username: this.state.username, password: this.state.password});
  }

  onLoginInsteadPress(){
    this.props.dispatch({type: "LOGIN_INSTEAD"});
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Email"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          onChangeText={(e) => this.handleChange(e,'u')}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          secureTextEntry={true}
          onChangeText={(e) => this.handleChange(e,'p')}
          value={this.state.password}
        />
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => this.onRegisterPress()}
          title="Register"
        />
        <Text onPress={() => this.onLoginInsteadPress()} style={styles.insteadText}>Login instead</Text>
      </View>
    );
  }

}

export default Register;
