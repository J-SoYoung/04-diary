import React from 'react';

function MyHeader({leftChild, centerText, rightChild}) {
  return (
    <div>
      <div className='leftChild'>{leftChild}</div>
      <div className='centerText'>{centerText}</div>
      <div className='rightChild'>{rightChild}</div>
    </div>
  );
}

export default MyHeader;