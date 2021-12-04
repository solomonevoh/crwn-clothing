import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const toggleCart = () => dispatch(toggleCartHidden());
  return(
  <div className='cart-icon' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ itemCount }</span>
  </div>
)};


// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });
//
// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

export default CartIcon;
