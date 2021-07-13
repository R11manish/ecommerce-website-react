import React from 'react';
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='preview-collection'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
