import React, { Component } from "react";
import CartSummary from "../cart/CartSummary";
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler } from "reactstrap";
import {Link} from "react-router-dom"

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">North Wind App</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />

          <Nav className="ml-auto" navbar>
            <NavItem style={{ marginLeft: "10px" }}><Link to="/">Go Home</Link></NavItem>
            <NavItem style={{ marginLeft: "10px" }}>Sepete Git</NavItem>
            <NavItem style={{ marginLeft: "10px" }}>Form1</NavItem>
            <NavItem style={{ marginLeft: "10px" }}>Form2</NavItem>
            <CartSummary />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
