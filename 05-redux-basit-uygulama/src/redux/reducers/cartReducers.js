import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


// Reducers stateleri döndürür.
export default function cartReducers(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        console.log(state)
        console.log(action.payload)
      var addedItem = state.find( c => c.product.id === action.payload.product.id);
      if(addedItem){
          var newState = state.map(cartItem => {
              if(cartItem.product.id === action.payload.product.id){
                  // Yeni bir obje üretir ve sağındakileri ona merge eder (isimlere çakışan varsa üstüne yazar. En sağdaki en üstün gelir)
                 return Object.assign({},addedItem,{quantity: addedItem.quantity + 1});
              }
              // bu durumda bu ne işe yarıyor, gerekli mi anlamadım.
              /* return cartItem; */
          })
          return newState;
      }else{
          return [...state,{...action.payload}];



/*             
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
               let numberStore = [0, 1, 2];
               let newNumber = 12;
               numberStore = [...numberStore, newNumber]; 
               */
      }
    default:
      return state; //initialState gönderiliyor
  }
}
