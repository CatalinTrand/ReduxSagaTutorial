const React = require("react-native");

const {StyleSheet} = React;

export default {

  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#2bd6f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: '90%',
    marginLeft: '5%'
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: '#267df1',
    width: '90%',
    marginLeft: '5%'
  },
  insteadText: {
    marginTop: 25,
    width: '100%',
    textAlign: 'center',
    fontSize: 16
  },
  tab_nav: {
    width: '100%',
    height: 80,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  nav_btn: {
    width: '50%',
    height: '100%',
    padding: 10,
    border: '2px solid black',
    backgroundColor: 'gray',
    color: '#2bd6f1'
  },
  nav_btn_highlight: {
    width: '50%',
    height: '100%',
    padding: 10,
    border: '2px solid black',
    backgroundColor: '#2bd6f1',
    color: 'black'
  },
  nav_btn_text: {
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 14,
  },
  list_header: {
    fontWeight: 700,
    fontSize: 20
  },
  list_item: {
    paddingLeft: 30,
    fontWeight: 400
  }
};
