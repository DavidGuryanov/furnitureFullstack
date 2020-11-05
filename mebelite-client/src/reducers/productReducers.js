import {
  PRODUCT_LIST_REQUEST_PENDING,
  PRODUCT_LIST_REQUEST_SUCCESS,
  PRODUCT_LIST_REQUEST_FAILED,
  PRODUCT_DETAILS_REQUEST_PENDING,
  PRODUCT_DETAILS_REQUEST_SUCCESS,
  PRODUCT_DETAILS_REQUEST_FAILED,
} from "../constatns/productConstants.js";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST_PENDING:
      return { loading: true, products: [] };
    case PRODUCT_LIST_REQUEST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_REQUEST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST_PENDING:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_REQUEST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_REQUEST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
