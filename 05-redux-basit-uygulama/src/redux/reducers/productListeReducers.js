import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


// Reducers stateleri döndürür.
export default function productListReducers(state = initialState.products, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state; //initialState gönderiliyor
  }
}
