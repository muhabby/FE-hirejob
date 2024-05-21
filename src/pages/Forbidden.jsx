import React from 'react';

const Forbidden = () => {
  return (
    <div className='h-[700px] flex flex-col gap-3 items-center justify-center'>
      <h1 className='text-6xl'>403 - Forbidden</h1>
      <p>You do not have permission to access this page.</p>
    </div>
  );
};

export default Forbidden;
