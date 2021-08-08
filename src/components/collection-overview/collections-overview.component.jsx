import React from 'react';
import { CollectionOverviewContainer } from './collection-overview.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../preview-collection/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
