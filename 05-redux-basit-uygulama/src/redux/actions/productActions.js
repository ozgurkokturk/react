import * as actionTypes from "./actionTypes";

/* ------ GET PRODUCT ------ */
export function getProductSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: products,
  };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductSuccess(result)))
      .catch((error) => {
        throw error;
      });
  };
}
/* -------------------------- */

/* ------ CREATE/UPDATE PRODUCT ------ */
export function updateProductSuccess(product) {
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function createProductSuccess(product) {
  return {
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function createOrUpdateProductApi(product) {
  let url = "http://localhost:3000/products/";
  return fetch(url + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((response) => handleResponse(response))
    .catch((responseError) => handleError(responseError));
}

export function createOrUpdateProduct(product) {
  return function (dispatch) {
    return createOrUpdateProductApi(product)
      .then((result) => {
        product.id
          ? dispatch(updateProductSuccess(result))
          : dispatch(createProductSuccess(result));
      })
      .catch((error) => {
        throw error;
      });
  };
}

//export demedim
async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

//export demedim
function handleError(resposeError) {
  console.error("hata productActions de olmalı! ");
  throw resposeError;
}

/* -------------------------------- */

/* ------ DELETE PRODUCT ------ */
export function deleteProductSuccess(product) {
  //console.log(product);
  return {
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function deleteProduct(product) {
  return function (dispatch) {
    let url = "http://localhost:3000/products/" + product.id;
    return fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      // result'ı return etmek yerine bu fonksiyona gelen product bilgilerini return ettim state'den silebilmek için
      .then((result) => dispatch(deleteProductSuccess(product)))
      .catch((error) => {
        throw error;
      });
  };
}

/* ---------------------------- */
