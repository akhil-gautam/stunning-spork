import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Axios from 'axios';

const EmptyForm = ({ setActive, refetch, quizID }) => {
  const touchQuestion = async () => {
    try {
      const response = await Axios.post('http://localhost:3000/questions', {
        quiz_id: quizID,
      });
      refetch();
      setActive(response.data.id);
      toast.success('Question added successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className='flex flex-col w-full'>
      <section className='h-full bg-gradient-to-r to-purple-100 from-gray-50 px-16 py-20'>
        <div className='bg-white flex flex-col justify-center items-center h-full rounded-lg py-16 px-8'>
          <button
            onClick={touchQuestion}
            className='text-3xl font-bold text-gray-800 tracking-wider border-2 border-purple-300 border-dashed px-20 py-4 transition ease-in hover:bg-gray-50 focus:outline-none'
          >
            ADD YOUR FIRST QUESTION
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmptyForm;
