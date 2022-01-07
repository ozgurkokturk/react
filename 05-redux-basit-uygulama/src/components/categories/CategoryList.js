import React, { Component } from 'react'
import { connect } from "react-redux"

import {bindActionCreators} from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"

import {ListGroup, ListGroupItem} from "reactstrap"

class CategoryList extends Component {

    componentDidMount(){
        this.props.actions.getCategories();
    }

    render() {
        return (
            <div>
                <h3>Categories: {this.props.categories.length}</h3>
                <ListGroup>
                    {
                     this.props.categories.map(category => (
                         <ListGroupItem active={category.id === this.props.currentCategory.id} onClick={() => this.props.actions.changeCategory(category)} key={category.id}>
                               {category.categoryName}
                         </ListGroupItem>
                     ))
                    }
                </ListGroup>
                <h5>{this.props.currentCategory.categoryName}</h5>
            </div>
        )
    }
}

// Tüm state'leri alabilmek için
function mapStateToProps(state){
    // combineReducers yaptığımız bütün reduxlar state olarak geldi
    console.log(state);
    return{
        currentCategory: state.changeCategoryReducers,
        categories : state.categoryListReducers
    }
}

// Aksiyona bağlanmak için
function mapDispatchToProps(dispatch){
    return{
        actions:{
            //  categoryActions'larıdaki getCategories'i çağırıyoruz o da categoryAction'larda getCategoriesSuccess'i çağırıyor
            getCategories: bindActionCreators(categoryActions.getCategories,dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory,dispatch)
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)