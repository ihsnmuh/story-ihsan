import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { feedbackType } from '../../../types';
import * as ga from 'lib/ga/index';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

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

export default function FeedbackForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  function trackSubmitFeedback() {
    if (process.env.NEXT_PUBLIC_MODE === 'production') {
      ga.event({
        action: 'submit_feedback',
        params: {
          event_category: 'Feedbacks',
          event_label: 'Submit Feedback',
        },
      });
    }
  }

  async function sendFeedbackHandler(event: { preventDefault: () => void }) {
    event.preventDefault();

    trackSubmitFeedback();

    setLoading(true);

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
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  }

  return (
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
      <LoadingButton
        type='submit'
        className='bg-blue-default-blue text-white dark:bg-yellow-400 dark:hover:bg-yellow-500 h-12'
        variant='contained'
        fullWidth
        size='large'
        loading={loading}
        loadingPosition='start'
      >
        Send
      </LoadingButton>
    </form>
  );
}
