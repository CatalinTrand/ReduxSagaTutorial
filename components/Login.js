import React, {useState} from 'react';
import {
  View,
} from 'react-native';
import {Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style';

const handleChange = (event = {}, from, data, setData) => {
  if (from == 'u') {
    setData({username: event, password: data.password});
  } else {
    setData({username: data.username, password: event});
  }
};

const onLoginPress = (data, props) => {
  props.dispatch({type: 'LOGIN', username: data.username, password: data.password});
};

const onRegisterInsteadPress = (props) => {
  props.dispatch({type: 'REGISTER_INSTEAD'});
};

function Login(props) {

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
        onPress={() => onLoginPress(data, props)}
        title="Login"
      />
      <Text onPress={() => onRegisterInsteadPress(props)} style={styles.insteadText}>Register instead</Text>
    </View>
  );
}

export default Login;
