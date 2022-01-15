import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { createOrUpdateProduct, getProducts } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  getProducts,
  categories,
  getCategories,
  createOrUpdateProduct,
  history,
  ...props
}) {


    /* 
        - Yukarıdaki fonksiyonun ilk parametresi olan products, mapStateToProps ile API'den gelen productslar
        - gelenProduct ise mapStateToProps ile API'den gelen productsları url üzerinden gelen
          product id ile eşleşen product'ın bilgilerini içerir

          Yukarıdaki fonksiyondaki ...props olayını anlamadım?
    */
    const [product, setProduct] = useState({...props.gelenProduct});
    console.log(product);
  

  // bu useEffect ne yaptı şimdi ???
  // yoruma aldım bir şey değişmedi
  // componentDidMount yapıyor product için ama gerek var mı ?
  useEffect(() => {
      //console.log((categories))
    if (categories.length === 0) {
        console.log("girdi")
      getCategories();
      getProducts();
    }
    setProduct({ ...props.gelenProduct });
  }, [products]);



  // bu handleChange ne yaptı ve previous kullanımı tam olarak nedir?
  // mevcut state'i gelen name ve value değerlerine göre güncelledi
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));

  }


  function handleSave(event) {
    event.preventDefault();
    createOrUpdateProduct(product).then(() => {
      history.push("/");
    });
  }


  return (
    <ProductDetail
      categories={categories}
      product={product}
      onSave={handleSave}
      onChange={handleChange}
    />
  );
}




//ownProps state'in kopyası gibi ama farklı bilgiler de taşıyor
// match diye bir objesi var içinde de urlden gelen product id var
function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  //console.log(ownProps.match);
  //console.log("productId = " + productId);
  console.log("state.productListReducers.lenght = "  + state.productListReducers.length);
  const product = productId && state.productListReducers.length > 0
      ? getProductById(state.productListReducers, productId)
      : {
          // Boş state durumunu tanımlamazsak bir hata veriyor . programın çalışmasını engellemese de düzeltmek istedim
        categoryId: '',
        id: '',
        productName: '',
        quantityPerUnit: '',
        unitPrice: '',
        unitsInStock: ''
      };
  return {
    gelenProduct: product,
    products: state.productListReducers,
    categories: state.categoryListReducers,
  };
}

function getProductById(products, productId) {
  let product = products.find( p => p.id == productId) || null;
  //console.log("url product : " + product);
  return product;
}

// productAction içindeki createOrUpdateProduct fonksiyonu post put yaptığımız api
const mapDispatchTopProps = {
  getCategories,
  getProducts,
  createOrUpdateProduct,
};

export default connect(mapStateToProps,mapDispatchTopProps)(AddOrUpdateProduct);
