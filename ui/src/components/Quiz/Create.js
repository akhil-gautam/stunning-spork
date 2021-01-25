import React from 'react';
import QuestionsContext from '../../contexts/QuestionsContext';

import QuestionForm from './QuestionForm';

const Create = ({ updateQuestion }) => {
  return (
    <div className='flex flex-col w-full'>
      <QuestionsContext.Consumer>
        {(questions) =>
          // TODO: change me to !questions.length
          questions.length ? (
            <section className='py-4 px-8 rounded-xl'>
              <h3 className='text-center font-bold text-3xl mb-10'>
                Create Quiz
              </h3>
              <TitleForm />
            </section>
          ) : (
            <QuestionForm />
          )
        }
      </QuestionsContext.Consumer>
    </div>
  );
};

const TitleForm = () => (
  <form className='flex flex-col space-y-4'>
    <label className='flex flex-col space-y-1'>
      <span className='text-2xl font-normal'>Title</span>
      <input
        placeholder='Example: DS Quiz for internal test 23-01-2021'
        onChange={() => ({})}
        value=''
        className='border border-gray-400 rounded-md px-4 py-2 transition ease-linear focus:outline-none ring-purple-300 focus:ring-2 ring-offset-2'
      />
    </label>
    <button className='w-1/4 rounded-lg ml-auto px-4 py-1 border-2 border-purple-700 transition duration-50 hover:bg-purple-700 hover:text-white tracking-widest'>
      CREATE QUIZ
    </button>
  </form>
);

export default Create;
