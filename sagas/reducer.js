import {categories, products} from '../components/staticData';

const initialState = {
  screen: 0,
  userData: null,
  shownProduct: null,
  categories: categories,
  products: products
};

export function reducer(state = initialState, action) {
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
