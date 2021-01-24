import React from 'react';
import LeftNav from './LeftNav';

const MainWrapper = ({ children }) => {
  return (
    <div className='h-full w-full flex'>
      <LeftNav />
      <div className='w-full bg-gray-50 px-8 py-4'>{children}</div>
    </div>
  );
};

export default MainWrapper;
