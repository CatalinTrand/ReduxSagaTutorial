import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import RenderContent from './components/RenderContent';
import createSagaMiddleWare from 'redux-saga';
import {NavigationContainer} from '@react-navigation/native';
import {initStorage} from './store/store';
import {watchLogin} from './sagas/login-saga';
import {watchRegister} from './sagas/register-saga';
import {reducer} from './sagas/reducer';

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
