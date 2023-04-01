import React from 'react';
import MyHeader from '../components/element/MyHeader';

const HomePage = () => {
  return (
    <div>
      <MyHeader leftChild={'<'} rightChild={'>'} centerText={'월'}/>
    </div>
  );
};

export default HomePage;