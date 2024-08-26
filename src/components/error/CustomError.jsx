import React from 'react';

const CustomError = ({ message }) => {
  if (!message) return null; // If there's no message, render nothing

  return (
    <div className='flex justify-center items-center  p-4'>
      <p className='text-red-600 font-semibold'>
        Error: {message}
      </p>
    </div>
  );
};

export default CustomError;
