import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class sepetToplam extends Component {
  renderDoluSepet() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Options - {this.props.sepet.length}
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.sepet.map((sepetItem) => (
            <DropdownItem key={sepetItem.urun.id}>
              <Badge color="danger" onClick={() => this.props.sepettenCikar(sepetItem.urun)}>Çıkar</Badge>
              {sepetItem.urun.productName}
              <Badge color="primary">{sepetItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderBosSepet() {
    return (
      <NavItem>
        <NavLink>Sepet Boş</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        {this.props.sepet.length > 0
          ? this.renderDoluSepet()
          : this.renderBosSepet()}
      </div>
    );
  }
}
