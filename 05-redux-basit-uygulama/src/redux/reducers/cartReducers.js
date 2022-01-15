import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// Reducers stateleri döndürür.

/*
  Descrption
  Aynı ürün sepete eklenmeye çalışılıyorsa sadece quantity arttır aksi halde
  bu yeni bir üründür state'e ürünü ekle
*/
export default function cartReducers(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find((c) => c.product.id === action.payload.product.id );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            // Yeni bir obje üretir ve sağındakileri ona merge eder (isimlere çakışan varsa üstüne yazar. En sağdaki en üstün gelir)
            return Object.assign({}, addedItem, {quantity: addedItem.quantity + 1});
          }
          return cartItem;
        });
        return newState;
      } else {
        // mevcut state'e action.payload merge et (array olarak)(redux'da array push yapılmaması gerekiyormuş)
        return [...state, { ...action.payload }];
        /*             
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            let arr1 = [0, 1, 2];
            let arr2 = [3, 4, 5];

            arr1 = [...arr1, ...arr2];
            //  arr1 is now [0, 1, 2, 3, 4, 5]
            // Note: Not to use const otherwise, it will give TypeError (invalid assignment)
          */
      }
      case actionTypes.REMOVE_FROM_CART:
        const newState2 = state.filter(c => (c.product.id !== action.payload.product.id));
        return newState2;
    default:
      return state; //initialState gönderiliyor
  }
}


/*
  ---- Diffrence between find and filter ----

  const array1 = [5, 12, 8, 130, 44];

  const found = array1.find(element => element > 10);  
  // Return 12

  const found = array1.filter(element => element > 10);
  // Return [12, 130, 44]

*/