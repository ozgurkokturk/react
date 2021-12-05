import React, { Component } from "react";
import CategoryList from "./CategoryList.js";
import Navi from "./Navi.js";
import ProducList from "./ProducList.js";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    simdikiKategori: "",
    urunler: [],
  };

  degistirSimdikiKategori = (item) => {
    this.setState({ simdikiKategori: item.categoryName });
    console.log(item.id);
    this.getirUrunler(item.id);
  };

  componentDidMount() {
    this.getirUrunler();
  }

  getirUrunler = (id) => { 
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ urunler: data }));
  };

  render() {
    let kategoriBilgileri = { baslik: "Kategori Listesi" };
    let urunBiglileri = { baslik: "Ürün Listesi" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                simdikiKategori={this.state.simdikiKategori}
                degistirSimdikiKategori={this.degistirSimdikiKategori}
                bilgiler={kategoriBilgileri}
              />
            </Col>
            <Col xs="9">
              <ProducList
                urunler={this.state.urunler}
                simdikiKategori={this.state.simdikiKategori}
                bilgiler={urunBiglileri}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
