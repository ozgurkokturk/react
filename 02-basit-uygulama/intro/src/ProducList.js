import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProducList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.bilgiler.baslik}-{this.props.simdikiKategori}
        </h3>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Birim Başına Miktar</th>
              <th>Birim Fiyatı</th>
              <th>Stok Miktarı</th>
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map((item) => (
              <tr key={item.id}>
                <td>{item.id} </td>
                <td>{item.productName} </td>
                <td>{item.quantityPerUnit} </td>
                <td>{item.unitPrice} </td>
                <td>{item.unitsInStock} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
