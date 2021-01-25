import React, { useState } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext';

const QuestionForm = ({ updateQuestion, active_id }) => {
  return (
    <QuestionsContext.Consumer>
      {({ questions }) => (
        <div className='flex flex-col w-full'>
          <section className='h-full bg-gradient-to-r to-purple-100 from-gray-50 px-16 py-20'>
            <div className='bg-white h-full rounded-lg py-16 px-8'>
              <form className='w-full flex flex-col items-start pl-12'>
                <label className='w-full flex space-x-2 text-2xl mb-3'>
                  <span>{questions.length + 1}) </span>
                  <input
                    placeholder='Edit me to make me your question?'
                    // value=''
                    className='w-full focus:outline-none question'
                    onChange={() => {}}
                  />
                </label>

                <label className='w-full flex space-x-2 text-lg text-gray-400 mb-16'>
                  <input
                    placeholder='(Some optional description)'
                    // value=''
                    className='w-full focus:outline-none question-description'
                    onChange={() => {}}
                  />
                </label>
                <div className='space-y-3 min-w-32'>
                  <Option />
                </div>
                <button
                  type='button'
                  className='underline mt-8 text-xl text-gray-700 focus:outline-none'
                >
                  Add Option
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </QuestionsContext.Consumer>
  );
};

const Option = () => {
  return (
    <label className='relative flex justify-between items-center group px-4 py-4 space-x-4 rounded-md border border-gray-600 transition ease-in hover:shadow-md'>
      <input
        className='w-full focus:outline-none ml-auto option font-bold text-lg bg-transparent'
        placeholder='Option(edit)'
        onChange={() => {}}
      />
      <div
        className='absolute -right-0 top-3 hidden transition ease-linear group-hover:inline-flex cursor-pointer'
        onClick={() => alert('you are about to delete')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#ff0000'
          width='30'
          height='30'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1}
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      </div>
    </label>
  );
};

export default QuestionForm;
