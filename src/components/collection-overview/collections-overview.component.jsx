import React from 'react';
import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../preview-collection/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});


export default connect(mapStateToProps)(CollectionsOverview);