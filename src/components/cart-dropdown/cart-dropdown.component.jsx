import React  from 'react';

import CustomButton from '../custom-button/cutom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            
        </div>
        <CustomButton>Go To CheckOut</CustomButton>
    </div>
)


export default CartDropdown;