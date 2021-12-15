import React, { Component } from "react";
import CategoryList from "./CategoryList.js";
import Navi from "./Navi.js";
import ProducList from "./ProducList.js";
import NotFound from "./NotFound";
import CartList from "./CartList.js";

import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    simdikiKategori: "",
    urunler: [],
    sepet: [],
  };

  degistirSimdikiKategori = (item) => {
    this.setState({ simdikiKategori: item.categoryName });
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

  sepeteEkle = (gelenItem) => {
    let yeniSepet = this.state.sepet;
    var addItem = yeniSepet.find((c) => c.urun.id === gelenItem.id);
    if (addItem) {
      addItem.quantity += 1;
    } else {
      yeniSepet.push({ urun: gelenItem, quantity: 1 });
    }
    this.setState({ sepet: yeniSepet });
    alertify.success(gelenItem.productName + " sepete eklendi!");
  };

  sepettenCikar = (gelenItem) => {
    let yeniSepet = this.state.sepet.filter((c) => c.urun.id !== gelenItem.id);
    this.setState({ sepet: yeniSepet });
  };

  render() {
    let kategoriBilgileri = { baslik: "Kategori Listesi" };
    let urunBiglileri = { baslik: "Ürün Listesi" };
    return (
      <div>
        <Container>
          <Navi sepet={this.state.sepet} sepettenCikar={this.sepettenCikar} />

          <Row>
            <Col xs="3">
              <CategoryList
                simdikiKategori={this.state.simdikiKategori}
                degistirSimdikiKategori={this.degistirSimdikiKategori}
                bilgiler={kategoriBilgileri}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProducList
                      urunler={this.state.urunler}
                      simdikiKategori={this.state.simdikiKategori}
                      bilgiler={urunBiglileri}
                      sepeteEkle={this.sepeteEkle}
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <CartList
                      sepet={this.state.sepet}
                      sepettenCikar={this.sepettenCikar}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
