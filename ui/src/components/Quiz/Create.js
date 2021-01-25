import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import QuestionsContext from '../../contexts/QuestionsContext';


const Create = ({createQuiz}) => {
  return (
    <div className='flex flex-col w-full'>
      <QuestionsContext.Consumer>
        {(questions) =>
          !questions.length ? (
            <section className='py-4 px-8 rounded-xl'>
              <h3 className='text-center font-bold text-3xl mb-10'>
                Create Quiz
              </h3>
              <TitleForm createQuiz={createQuiz}/>
            </section>
          ) : (
            null
          )
        }
      </QuestionsContext.Consumer>
    </div>
  );
};

const TitleForm = ({createQuiz}) => {
  debugger;
  const [values, setValues] = useState({ title: '' });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    createQuiz(values);
  };

  return (
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
      <label className='flex flex-col space-y-1'>
        <span className='text-2xl font-normal'>Title</span>
        <input
          name='title'
          placeholder='Example: DS Quiz for internal test 23-01-2021'
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          value={values.title}
          className='border border-gray-400 rounded-md px-4 py-2 transition ease-linear focus:outline-none ring-purple-300 focus:ring-2 ring-offset-2'
        />
      </label>
      <button className='w-1/4 rounded-lg ml-auto px-4 py-1 border-2 border-purple-700 transition duration-50 hover:bg-purple-700 hover:text-white tracking-widest'>
        CREATE QUIZ
      </button>
    </form>
  );
};

export default Create;
