import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";
import SepetToplam from "./SepetToplam";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">North Wind App</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
       
              <Nav className="ml-auto" style={{float:'right'}} navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                  <SepetToplam sepet={this.props.sepet} />
              </Nav>        
          </Navbar>
        </div>
      </div>
    );
  }
}
