import React from 'react';

import QuestionsContext from '../../contexts/QuestionsContext';

const LeftWindow = ({ changeActive, addQuestion }) => {
  return (
    <div className='w-72 h-screen flex flex-col'>
      <header className='flex items-center justify-between px-2 py-4 text-md font-semibold tracking-wider'>
        <div>QUESTIONS</div>
        <button
          className='bg-purple-100 hover:bg-purple-50 p-2 rounded-lg'
          title='Click to add question'
          onClick={addQuestion}
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
      <QuestionsContext.Consumer>
        {(questions) =>
          questions.length ? (
            <ul className='px-1'>
              {questions.map((question, index) => (
                <li onClick={() => changeActive(index)}>
                  <QuestionPreview question={question} />
                </li>
              ))}
            </ul>
          ) : (
            <div className='text-sm text-gray-600 rounded-md bg-gradient-to-tr from-purple-50 to-gray-50 px-6 py-2'>
              Your questions will be previewed here
            </div>
          )
        }
      </QuestionsContext.Consumer>
    </div>
  );
};

const QuestionPreview = ({
  id,
  number = 1,
  title = 'What is this question about physics?',
}) => (
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
