import React, { useState } from 'react';

const QuestionForm = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <section className='w-full h-full bg-gradient-to-r to-purple-100 from-gray-50 px-16 py-20'>
      <div className='bg-white h-full w-full rounded-lg'>
        <Question />
      </div>
    </section>
  );
};

const Question = ({ number = 1 }) => {
  return (
    <form className=''>
      <label>
        <span>{number}) </span>
        <input
          placeholder='What is your question?'
          value=''
          onChange={() => {}}
        />
      </label>
    </form>
  );
};

export default QuestionForm;
