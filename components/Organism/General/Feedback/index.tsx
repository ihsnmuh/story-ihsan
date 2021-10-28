import { Button } from '@mui/material';
import { useState } from 'react';
import Dotes from '../../../Atoms/dotes';

export default function Feedback() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleMessage(event: { preventDefault: () => void }) {
    event.preventDefault();
    const newMessage = {
      name,
      email,
      message,
    };
    console.log(newMessage);
  }

  return (
    <div className='flex flex-col justify-center content-center bg-blue-100 dark:bg-gray-600 p-8 lg:px-80 lg:py-20'>
      <Dotes />
      <div className='text-3xl font-bold p-5 text-center'>
        {'<Keep in touch/>'}
      </div>
      <div>
        <p className='lg:text-2xl mb-8 text-center '>
          Feel free to give me feedback or suggestions. You can also reach me at
          my social media{' '}
          <a
            className='text-blue-500 hover:text-blue-600 dark:text-yellow-400 dark:hover:text-yellow-600 font-bold'
            href='https://www.instagram.com/ihsnmuh/'
            target='_blank'
          >
            Instagram
          </a>
          ,{' '}
          <a
            className='text-blue-500 hover:text-blue-600 dark:text-yellow-400 dark:hover:text-yellow-600 font-bold'
            href='https://twitter.com/ihcaann'
            target='_blank'
          >
            Twitter
          </a>
        </p>
      </div>
      <form className='p-2 md:p-10 space-y-6' onSubmit={handleMessage}>
        <div>
          <p className='font-bold'>Full Name</p>
          <input
            type='text'
            placeholder='Your name'
            onChange={(e) => setName(e.target.value)}
            className='focus:outline-none focus:ring focus:border-blue-300 h-12 w-full rounded-md p-2 my-2'
            required
          />
        </div>
        <div>
          <p className='font-bold'>Email</p>
          <input
            type='email'
            placeholder='Yourname@mail.com'
            onChange={(e) => setEmail(e.target.value)}
            className='focus:outline-none focus:ring focus:border-blue-300 h-12 w-full rounded-md p-2 my-2'
            required
          />
        </div>
        <div>
          <p className='font-bold'>Message</p>
          <textarea
            rows={5}
            placeholder='Your message'
            onChange={(e) => setMessage(e.target.value)}
            className='focus:outline-none focus:ring focus:border-blue-300 w-full rounded-md p-2 my-2'
            required
          />
        </div>
        <button className='transition duration-300 ease-in-out transform hover:-translate-y-0 hover:scale-105 bg-blue-500 text-white dark:bg-yellow-400 dark:hover:bg-yellow-500 h-12 w-full rounded-md drop-shadow-md'>
          Send
        </button>
      </form>
    </div>
  );
}
