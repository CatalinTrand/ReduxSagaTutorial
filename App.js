import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import RenderContent from './components/RenderContent';
import createSagaMiddleWare from 'redux-saga';
import { takeEvery, put} from "redux-saga/effects";

const initialState = {
  screen: 0,
  userData: null,
  shownProduct: null,
  categories: [
    { id: 1, name: "Shirts" },
    { id: 2, name: "Shoes" },
    { id: 3, name: "Hats" }
  ],
  products: [
    { id: 1, category_id: 1, name: "Short Sleeve T-Shirt", price: "10.99", description: "This is a product description", reviews: [] },
    { id: 2, category_id: 1, name: "Medium Sleeve T-Shirt", price: "11.99", description: "This is a product description", reviews: [] },
    { id: 3, category_id: 1, name: "Long Sleeve T-Shirt", price: "12.99", description: "This is a product description", reviews: [] },
    { id: 4, category_id: 2, name: "Nike Trainers", price: "120.99", description: "This is a product description", reviews: [] },
    { id: 5, category_id: 2, name: "Puma Trainers", price: "130.99", description: "This is a product description", reviews: [] },
    { id: 6, category_id: 2, name: "Sandals", price: "4.99", description: "This is a product description", reviews: [] },
    { id: 7, category_id: 3, name: "Hat Tall", price: "14.99", description: "This is a product description", reviews: [] },
    { id: 8, category_id: 3, name: "Hat Grande", price: "15.99", description: "This is a product description", reviews: [] },
    { id: 9, category_id: 3, name: "Hat Venti", price: "16.99", description: "This is a product description", reviews: [] },
  ]
};

function* loginAsync(action){
  let user_list = JSON.parse(localStorage.getItem('user_list'));
  let correctUser = false;
  user_list.forEach((user => user.username == action.username && user.password == action.password ? correctUser = true : correctUser = correctUser ));
  if(correctUser)
    yield put({type: "AUTHENTICATE_ASYNC", userData: action});
}

function* registerAsync(action){
  let user_list = JSON.parse(localStorage.getItem('user_list'), []);
  let usernameExists = false;
  user_list.forEach((user => user.username == action.username ? usernameExists = true : usernameExists = usernameExists ));
  if(usernameExists)
    return;

  user_list.push({ username: action.username, password: action.password });
  localStorage.setItem('user_list', JSON.encode(user_list));

  yield put({type: "AUTHENTICATE_ASYNC", userData: { username: action.username, password: action.password } });
}

function* watchLogin(){
  yield takeEvery("LOGIN", loginAsync);
}

function* watchRegister(){
  yield takeEvery("REGISTER", registerAsync);
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_INSTEAD':
      return {
        screen: 0
      };
    case 'REGISTER_INSTEAD':
      return {
        screen: 1
      };
    case 'AUTHENTICATE_ASYNC':
      return {
        shownProduct: null,
        userData: action.userData,
        screen: 2
      };
    case 'DISPLAY_PRODUCT':
      return {
        shownProduct: action.shownProduct,
        screen: 3
      };
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <RenderContent/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
