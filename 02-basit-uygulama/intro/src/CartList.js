import React, { Component } from 'react'
import {Table, Button} from 'reactstrap';


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
                            <td>
                                <Button color="danger" onClick={() => this.props.sepettenCikar(item.urun)}>Çıkar</Button>
                            </td>
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
