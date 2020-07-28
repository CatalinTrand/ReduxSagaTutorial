import React, {useState} from 'react';
import {
  View,
} from 'react-native';
import {connect} from "react-redux";
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProductDetails from './ProductDetails';

function RenderContent (props) {
    switch (props.screen) {
      case 0:
        return <Login dispatch={props.dispatch} />;
      case 1:
        return <Register dispatch={props.dispatch} />;
      case 2:
        return <Dashboard dispatch={props.dispatch} userData={props.userData} categories={props.categories} products={props.products}/>;
      case 3:
        return <ProductDetails dispatch={props.dispatch} userData={props.userData} shownProduct={props.shownProduct} />;
      default:
        return <Login dispatch={props.dispatch} />;
    }
}

const mapStateToProps = state => ({
  screen: state.screen,
  userData: state.userData,
  shownProduct: state.shownProduct,
  categories: state.categories,
  products: state.products,
});

export default connect(mapStateToProps)(RenderContent);
