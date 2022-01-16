import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


// Reducers stateleri döndürür.
export default function productListReducers(state = initialState.products, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS:
      return action.payload;
      case actionTypes.DELETE_PRODUCT_SUCCESS:
        let newState = state.filter(item => item.id !== action.payload.id)
        return newState;
    default:
      return state; //initialState gönderiliyor
  }
}
