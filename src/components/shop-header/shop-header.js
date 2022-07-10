import React from "react";
import {Link} from "react-router-dom";

import './shop-header.css';
import {compose} from "../../utils";
import {withBookStoreService} from "../hoc";
import {connect} from "react-redux";

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header row'>
            <Link to='/'>
                <div className='logo text-dark' >ReStore</div>
            </Link>
            <Link to='/cart'>
                <div className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    {numItems} items (${total})
                </div>
            </Link>

        </header>
    )
};

const mapStateToProps = ({shoppingCart: {orderTotal, cartItems}}) => {
    return {
        numItems: cartItems.reduce(
            (prev, next) => prev + next.count,
            0
        ),
        total: orderTotal
    }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps)
)(ShopHeader);