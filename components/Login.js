import React from 'react';
import {
  View,
} from 'react-native';
import {connect} from "react-redux";

class Login extends React.Component {

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

  onLoginPress(){
    this.props.dispatch({type: "LOGIN", username: this.state.username, password: this.state.password});
  }

  onRegisterInsteadPress(){
    this.props.dispatch({type: "REGISTER_INSTEAD"});
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          onChangeText={(e) => this.handleChange(e,'e')}
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
          onPress={() => this.onLoginPress()}
          title="Login"
        />
        <Text onPress={() => this.onRegisterInsteadPress()} style={styles.insteadText}>Register instead</Text>
      </View>
    );
  }

}

export default Login;
