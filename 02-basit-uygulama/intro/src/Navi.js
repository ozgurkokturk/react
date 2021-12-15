import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import SepetToplam from "./SepetToplam";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">North Wind App</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />

            <Nav className="ml-auto" style={{ float: "right" }} navbar>
              <NavItem>
                <Link to="/cart">Sepete Git</Link>
              </NavItem>
              <NavItem style = {{marginLeft: "10px"}}>
                <Link to="/">Go Home</Link>
              </NavItem>
              <SepetToplam
                sepet={this.props.sepet}
                sepettenCikar={this.props.sepettenCikar}
              />
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}
