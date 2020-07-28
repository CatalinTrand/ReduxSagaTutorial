import React, {useState} from 'react';
import {
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {Text, TextInput} from 'react-native';
import styles from './style';
import {Button} from 'react-native-elements';

const handleChange = (event = {}, from, data, setData) => {
  if (from == 'u') {
    setData({username: event, password: data.password});
  } else {
    setData({username: data.username, password: event});
  }
};

const onRegisterPress = (data, props) => {
  props.dispatch({type: 'REGISTER', username: data.username, password: data.password});
};

const onLoginInsteadPress = (props) => {
  props.dispatch({type: 'LOGIN_INSTEAD'});
};

function Register(props) {

  const [data, setData] = useState(
    {
      username: '',
      password: '',
    },
  );

  return (
    <View>
      <TextInput
        placeholder="Email"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        onChangeText={(e) => handleChange(e, 'u', data, setData)}
        value={data.username}
      />
      <TextInput
        placeholder="Password"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
        onChangeText={(e) => handleChange(e, 'p', data, setData)}
        value={data.password}
      />
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => onRegisterPress(data, props)}
        title="Register"
      />
      <Text onPress={() => onLoginInsteadPress(props)} style={styles.insteadText}>Login instead</Text>
    </View>
  );
}

export default Register;
