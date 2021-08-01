import React from 'react';

import CollectionPreview from '../../components/preview-collection/collection-preview';
import { selectCollections } from '../../redux/shop/shop.selector';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
