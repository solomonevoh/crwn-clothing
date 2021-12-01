import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  PriceContainer,
  NameContainer
} from './collection-item.styles';
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => dispatch(addItem(item));

  const {  name, price, imageUrl } = item;
  return (
  <CollectionItemContainer>
    <BackgroundImage  className='background-image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{ name }</NameContainer>
      <PriceContainer>{ price }</PriceContainer>
    </CollectionFooterContainer>
    <AddButton
       className='add-button'
      onClick={() => addToCart() }>
      Add to cart
    </AddButton>
  </CollectionItemContainer>
)};

export default CollectionItem;
