import React, { useState } from 'react';

import QuestionsContext from '../../contexts/QuestionsContext';

import Create from './Create';
import LeftWindow from './LeftWindow';

const defaultQuestion = {
  key: 1,
  title: '',
  description: '',
  options: [],
  correct: null,
};

const Quiz = () => {
  const [questions, setQuestions] = useState([defaultQuestion]);
  const [active, setActive] = useState('');

  const changeActive = (index) => {
    setActive(index);
  };

  const addQuestion = async () => {
    defaultQuestion.key = questions[questions.length - 1].key + 1;
    setQuestions([...questions, defaultQuestion]);
    setActive(question.key);
  };

  return (
    <div className='w-full flex flex-col'>
      <Header />
      <section className='flex w-full'>
        <QuestionsContext.Provider value={{ questions }}>
          <LeftWindow changeActive={changeActive} addQuestion={addQuestion} />
          <Create active={active} />
        </QuestionsContext.Provider>
      </section>
    </div>
  );
};

const Header = () => (
  <header className='w-full shadow-sm py-2 px-4'>
    <a href='/' className='flex items-center space-x-4'>
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
          d='M10 19l-7-7m0 0l7-7m-7 7h18'
        />
      </svg>
      <span>Back to Home</span>
    </a>
  </header>
);

export default Quiz;
