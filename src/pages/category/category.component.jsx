import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.components';

import './category.styles.scss';

const CategoryPage = ({ match }) => {
  console.log(match.params.CategoryId);
  return (
    <div className='category'>
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default CategoryPage;
