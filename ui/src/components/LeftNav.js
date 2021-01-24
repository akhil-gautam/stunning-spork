import React from 'react';

const LeftNav = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-around'>
      <div className='w-72 h-screen'>
        <div className='flex items-center justify-start mx-6 mt-10'>
          <img
            alt="queasy logo"
            className='h-10 w-10 object-cover rounded-full'
            src='https://images.pexels.com/photos/4443508/pexels-photo-4443508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100'
          />
          <span className='text-gray-900 dark:text-gray-300 ml-4 text-2xl font-bold'>
            Queasy
          </span>
        </div>
        <nav className='mt-10 px-6 '>
          <a
            className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-900 duration-200  text-gray-900 dark:text-gray-400 rounded-lg '
            href='#'
          >
            <svg
              width='20'
              height='20'
              fill='currentColor'
              className='m-auto'
              viewBox='0 0 2048 1792'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z'></path>
            </svg>
            <span className='mx-4 text-lg font-normal'>Dashboard</span>
            <span className='flex-grow text-right'></span>
          </a>
          <a
            className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-900 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-900'
            href='#'
          >
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              className='m-auto'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span className='mx-4 text-lg font-normal'>Create</span>
            <span className='flex-grow text-right'></span>
          </a>
        </nav>
        <div className='absolute bottom-4'>
          <a
            className='text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-lg dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8'
            href='#'
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
                strokeWidth='2'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
            <span className='ml-3 font-semibold'>Log out</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
