import React, { Component } from 'react'
import {Table} from 'reactstrap';

export default class CartList extends Component {
    renderSepet(){
        return(
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Kategori Id</th>
                        <th>Urun Adı</th>
                        <th>Birim</th>
                        <th>Fiyat</th>
                        <th>Stok</th>
                        <th>Adet</th>
                    </tr>
                </thead>
                <tbody>
                {console.log(this.props.sepet)}
                    {
                       
                        this.props.sepet.map(item => (
                            <tr key={item.urun.id}>                                        
                            <td>{item.urun.id} </td>
                            <td>{item.urun.categoryId} </td>
                            <td>{item.urun.productName} </td>
                            <td>{item.urun.quantityPerUnit} </td>
                            <td>{item.urun.unitPrice} </td>
                            <td>{item.urun.unitsInStock} </td>
                            <td>{item.quantity}</td>
                          </tr>
                        ))
                        
                    }
                </tbody>
            </Table>
        );
    }
    render() {
        return (
            <div>
                {this.renderSepet()}
            </div>
        )
    }
}
