import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import RenderContent from './components/RenderContent';
import createSagaMiddleWare from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import SyncStorage from 'sync-storage';
import {NavigationContainer} from '@react-navigation/native';
import {categories, products} from './components/staticData';

const initialState = {
  screen: 0,
  userData: null,
  shownProduct: null,
  categories: categories,
  products: products
};

async function initStorage(){
  const data = await SyncStorage.init();
  console.log('AsyncStorage is ready!');
}

function* loginAsync(action) {
  const user_list = SyncStorage.get('user_list');
  let userList = [];

  console.log("login: ");
  console.log(user_list);

  if (user_list != null && user_list !== undefined)
    userList = JSON.parse(user_list);

  let correctUser = false;
  userList.forEach((user => user.username == action.username && user.password == action.password ? correctUser = true : correctUser = correctUser));
  if (correctUser) {
    yield put({type: 'AUTHENTICATE_ASYNC', userData: action});
  }
}

function* registerAsync(action) {
  let user_list = SyncStorage.get('user_list');
  let userList = [];

  console.log("register: ");
  console.log(user_list);

  if (user_list != null && user_list !== undefined)
    userList = JSON.parse(user_list);

  let usernameExists = false;
  userList.forEach((user => user.username == action.username ? usernameExists = true : usernameExists = usernameExists));
  if (usernameExists) {
    return;
  }

  userList.push({username: action.username, password: action.password});
  console.log("new user list: " + userList);
  SyncStorage.set('user_list', JSON.stringify(userList));

  yield put({type: 'AUTHENTICATE_ASYNC', userData: {username: action.username, password: action.password}});
}

function* watchLogin() {
  yield takeEvery('LOGIN', loginAsync);
}

function* watchRegister() {
  yield takeEvery('REGISTER', registerAsync);
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_INSTEAD':
      return {
        screen: 0,
        userData: null,
        shownProduct: null,
        categories: state.categories,
        products: state.products
      };
    case 'REGISTER_INSTEAD':
      return {
        screen: 1,
        userData: null,
        shownProduct: null,
        categories: state.categories,
        products: state.products
      };
    case 'AUTHENTICATE_ASYNC':
      return {
        screen: 2,
        userData: action.userData,
        shownProduct: null,
        categories: state.categories,
        products: state.products
      };
    case 'DISPLAY_PRODUCT':
      return {
        screen: 3,
        userData: state.userData,
        shownProduct: action.shownProduct,
        categories: state.categories,
        products: state.products
      };
    default:
      return state;
  }
}

initStorage();

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <RenderContent/>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
