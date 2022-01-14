import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// Reducers stateleri döndürür.
export default function createOrUpdateProductReducers(state = initialState.createOrUpdateProduct,action){
  switch (action.type) {
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state; //initialState gönderiliyor
  }
}
