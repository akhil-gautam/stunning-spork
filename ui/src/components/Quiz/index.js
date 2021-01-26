import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import QuestionsContext from '../../contexts/QuestionsContext';
import Create from './Create';
import QuestionForm from './QuestionForm';
import LeftWindow from './LeftWindow';
import EmptyForm from './EmptyQuestionPage';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [active, setActive] = useState('');

  const history = useHistory();
  const quizID = history.location.pathname.split('/')[2];

  const changeActive = (id) => {
    setActive(id);
  };

  const fetchQuestions = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:3000/questions?quiz_id=${quizID}`
      );
      setQuestions(response.data);
      setActive(response.data[response.data.length - 1].id);
    } catch (e) {
      console.log(e);
    }
  };

  const createQuiz = async (values) => {
    try {
      const response = await Axios.post(
        'http://localhost:3000/quizzes',
        values
      );
      history.push(`quiz/${response.data.uuid}/create`);
      toast.success('Quiz created successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const addQuestion = async (values = {}) => {
    try {
      console.log({
        ...values,
        quizID,
      });
      const response = await Axios.post('http://localhost:3000/questions', {
        ...values,
        quizID,
      });

      setActive(response.id);
      toast.success('Question added successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
      fetchQuestions();
    } catch (e) {
      console.log(e);
    }
  };

  const renderForms = () => {
    if (quizID) {
      if (questions.length) {
        return <QuestionForm />;
      } else {
        return (
          <EmptyForm
            quizID={quizID}
            setActive={setActive}
            refetch={fetchQuestions}
          />
        );
      }
    } else {
      return <Create createQuiz={createQuiz} />;
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className='w-full flex flex-col'>
      <Header />
      <section className='flex w-full'>
        <QuestionsContext.Provider value={{ questions, createQuiz }}>
          <LeftWindow
            questions={questions}
            changeActive={changeActive}
            addQuestion={addQuestion}
            setActive={setActive}
          />
          {renderForms()}
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
