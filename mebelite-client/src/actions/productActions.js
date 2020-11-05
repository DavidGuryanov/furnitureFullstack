import axios from "axios";
import {
  PRODUCT_LIST_REQUEST_PENDING,
  PRODUCT_LIST_REQUEST_SUCCESS,
  PRODUCT_LIST_REQUEST_FAILED,
  PRODUCT_DETAILS_REQUEST_PENDING,
  PRODUCT_DETAILS_REQUEST_SUCCESS,
  PRODUCT_DETAILS_REQUEST_FAILED,
} from "../constatns/productConstants.js";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST_PENDING });
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCT_LIST_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST_PENDING });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
