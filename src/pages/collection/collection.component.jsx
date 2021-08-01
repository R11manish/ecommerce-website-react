import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.components';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  console.log(match.params);
  return (
    <div className='collection-page'>
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default CollectionPage;
