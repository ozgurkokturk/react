import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  selectedCategory() {
    return this.props.currentCategory.categoryName;
  }

  addToCart = (product) => {
    // quantity ve product isminde 2 farklı obje state state'e yani cartReducers'a gidiyor
    this.props.actions.addToCart({quantity:1,product:product});
    alertify.success(product.productName + "sepete eklendi");
  }

  render() {
    return (
      <div>
        <h3>
          Products
          {this.selectedCategory() ? " > " + this.selectedCategory() : " "}
        </h3>
        <Table hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{(index+1)}</th>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color="success" onClick={() => this.addToCart(product)}>Ekle</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducers,
    products: state.productListReducers,
    cart: state.cartReducers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart : bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
