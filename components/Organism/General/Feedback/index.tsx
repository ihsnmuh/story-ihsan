import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { feedbackType } from '../../../../types';
import Dotes from '../../../Atoms/dotes';

async function sendFeedbackData(feedbackData: feedbackType) {
  const respose = await fetch('api/feedback', {
    method: 'POST',
    body: JSON.stringify(feedbackData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await respose.json();
  if (!respose.ok) {
    throw new Error(data.message || 'Something wrong!');
  } else {
    return data;
  }
}

export default function Feedback() {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function sendFeedbackHandler(event: { preventDefault: () => void }) {
    event.preventDefault();

    const newMessage = {
      name,
      email,
      message,
    };

    try {
      const data = await sendFeedbackData(newMessage);
      enqueueSnackbar('Thank you for your feedback!', { variant: 'success' });
      setEmail('');
      setName('');
      setMessage('');
    } catch (error: any) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
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
      <form className='p-2 md:p-10 space-y-6' onSubmit={sendFeedbackHandler}>
        <div>
          <p className='font-bold'>Full Name</p>
          <input
            value={name}
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
            value={email}
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
            value={message}
            placeholder='Your message'
            onChange={(e) => setMessage(e.target.value)}
            className='focus:outline-none focus:ring focus:border-blue-300 w-full rounded-md p-2 my-2'
            required
          />
        </div>
        <button
          className='transition duration-300 ease-in-out transform hover:-translate-y-0 hover:scale-105 bg-blue-500 text-white dark:bg-yellow-400 dark:hover:bg-yellow-500 h-12 w-full rounded-md drop-shadow-md'
          disabled
        >
          Send
        </button>
      </form>
    </div>
  );
}
