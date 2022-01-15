import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartSummary extends Component {

  removeFromCart(cartItem) {
    this.props.actions.removeFromCart(cartItem);
    alertify.error(cartItem.product.productName + " sepetten silindi");
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu className="dropmrop">
          <DropdownItem>
            <Link to="/cart">Sepete Git</Link>
          </DropdownItem>
          <DropdownItem divider />
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                onClick={() => this.removeFromCart(cartItem)}
                color="danger"
              >
                x
              </Badge>
              {cartItem.product.productName}
              <Badge color="primary">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
