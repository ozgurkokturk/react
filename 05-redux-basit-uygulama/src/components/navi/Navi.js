import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">North Wind App</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />

            <Nav className="ml-auto" style={{ float: "right" }} navbar>
              <NavItem style = {{marginLeft: "10px"}}>
              Go Home
              </NavItem>
              <NavItem style = {{marginLeft: "10px"}}>
              Sepete Git
              </NavItem>
              <NavItem style = {{marginLeft: "10px"}}>
                Form1
              </NavItem>
              <NavItem style = {{marginLeft: "10px"}}>
                Form2
              </NavItem>
            </Nav>
            
          </Navbar>
        </div>
      </div>
    );
  }
}
