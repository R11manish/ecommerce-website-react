import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/cutom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import { stat } from 'fs-extra';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go To CheckOut</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartDropdown);
