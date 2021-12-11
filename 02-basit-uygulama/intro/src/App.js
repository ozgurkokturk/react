import React, { Component } from "react";
import CategoryList from "./CategoryList.js";
import Navi from "./Navi.js";
import ProducList from "./ProducList.js";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    simdikiKategori: "",
    urunler: [],
    sepet: [],
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



  sepeteEkle = (gelenItem) => {
    let yeniSepet = this.state.sepet;
    var addItem = yeniSepet.find(c => c.urun.id === gelenItem.id);
    if(addItem){
      addItem.quantity += 1;
    }else{
      yeniSepet.push({urun:gelenItem,quantity:1});
    }
    this.setState({sepet:yeniSepet});
  }


  render() {
    let kategoriBilgileri = { baslik: "Kategori Listesi" };
    let urunBiglileri = { baslik: "Ürün Listesi" };
    return (
      <div>
        <Container>
          
            <Navi
               sepet={this.state.sepet}
            />
          
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
                sepeteEkle={this.sepeteEkle}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
