import React from 'react';
import {
  View,
} from 'react-native';
import {connect} from "react-redux";
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProductDetails from './ProductDetails';

class RenderContent extends React.Component {

  render() {
    switch (this.props.screen) {
      case 0:
        return <Login dispatch={this.props.dispatch} />;
      case 1:
        return <Register dispatch={this.props.dispatch} />;
      case 2:
        return <Dashboard dispatch={this.props.dispatch} userData={this.props.userData} categories={this.props.categories} products={this.props.products}/>;
      case 3:
        return <ProductDetails dispatch={this.props.dispatch} userData={this.props.userData} shownProduct={this.props.shownProduct} />;
      default:
        return <Login dispatch={this.props.dispatch} />;
    }
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
