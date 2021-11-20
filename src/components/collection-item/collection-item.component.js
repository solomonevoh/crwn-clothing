import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  PriceContainer,
  NameContainer
} from './collection-item.styles';
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItem = ({ item, addItem }) => {
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
      onClick={() => addItem(item)}>
      Add to cart
    </AddButton>
  </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});


export default connect(null,
   mapDispatchToProps
 )(CollectionItem);
