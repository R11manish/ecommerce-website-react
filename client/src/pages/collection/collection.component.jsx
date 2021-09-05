import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.components';
import { selectCollection } from '../../redux/shop/shop.selector';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import {
  CollectionItemContainer,
  CollectionPageContainer,
  TitleContainer,
} from './collection.styles';

const CollectionPage = () => {
  const {collectionId} = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <CollectionItemContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemContainer>
    </CollectionPageContainer>
  );
};


export default CollectionPage;
