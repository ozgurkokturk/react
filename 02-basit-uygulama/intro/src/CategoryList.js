import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategoriler: [],
    };
  }

  componentDidMount(){
    this.getirKategoriler();
  }
  
  getirKategoriler = () => {
    fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(data => this.setState({kategoriler : data}));
  }

  render() {
    return (
      <div>
        <h3>{this.props.bilgiler.baslik}</h3>
        <ListGroup>
          {this.state.kategoriler.map((item) => (
            <ListGroupItem 
              active={this.props.simdikiKategori === item.categoryName?true:false}
              onClick={() => this.props.degistirSimdikiKategori(item)}
              key={item.id}
            >
              {item.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.simdikiKategori}</h4>
      </div>
    );
  }
}
