import React from 'react';

const EmptyForm = ({add}) => {
  return (
    <div className='flex flex-col w-full'>
      <section className='h-full bg-gradient-to-r to-purple-100 from-gray-50 px-16 py-20'>
        <div className='bg-white flex flex-col justify-center items-center h-full rounded-lg py-16 px-8'>
          <button className='text-3xl font-bold text-gray-800 tracking-wider border-2 border-purple-300 border-dashed px-20 py-4 transition ease-in hover:bg-gray-50'>
            ADD YOUR FIRST QUESTION
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmptyForm;
