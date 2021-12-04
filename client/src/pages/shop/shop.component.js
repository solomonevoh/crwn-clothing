 import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  dispatch(fetchCollectionsStart());  

    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
    </div>
   );
  }

export default ShopPage;
