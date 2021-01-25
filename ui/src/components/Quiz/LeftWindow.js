import React from 'react';



const LeftWindow = () => {
  return (
    <div className='w-72 h-screen flex flex-col'>
      <header className='flex items-center justify-between px-2 py-4 text-md font-semibold tracking-wider'>
        <div>QUESTIONS</div>
        <button
          className='bg-purple-100 hover:bg-purple-50 p-2 rounded-lg'
          title='Click to add question'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
      </header>
      <hr className='w-full mb-8' />
      <ul className='px-1'>
        <li>
          <QuestionPreview />
        </li>
      </ul>
    </div>
  );
};

const QuestionPreview = ({ id, number = 1, title = 'What is this question about physics?' }) => (
  <div className='flex px-2 py-4 border rounded-md space-x-2'>
    <div className='h-12 w-12 bg-gray-50 p-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        width='30'
        height='30'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4 6h16M4 12h8m-8 6h16'
        />
      </svg>
    </div>
    <div className='text-sm'>
      <span>{number}.&nbsp;</span>
      <span className='text-gray-400 font-normal'>{title}</span>
    </div>
  </div>
);

export default LeftWindow;
