import React from 'react';
import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  NameContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <NameContainer>
        {quantity} x ${price}
      </NameContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
