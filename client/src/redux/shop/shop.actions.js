import ShopActionTypes from './shop.types';
import { collection, getDocs  } from '@firebase/firestore';
import { firestore, convertCollectionSnapshotToMap } from  '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return async dispatch => {
    const collectionRef = collection(firestore, 'collections');
    dispatch(fetchCollectionsStart());

    try {
      const data = await getDocs(collectionRef);
      const collectionsMap = convertCollectionSnapshotToMap(data);
        dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch(error){
      dispatch(fetchCollectionsFailure(error.message))
    }

    }
  };
