import Dotes from 'components/Atoms/dotes';
import FeedbackForm from 'components/Molecules/FeedbackForm';

export default function Feedback() {
  return (
    <div className='flex flex-col justify-center content-center mt-10 bg-blue-100 dark:bg-gray-600 p-8 lg:px-80 lg:py-20'>
      <Dotes />
      <div className='text-3xl font-bold p-5 text-center'>{'<Keep in touch/>'}</div>
      <div>
        <p className='lg:text-2xl mb-8 text-center '>
          Feel free to give me feedback or suggestions. You can also reach me at my social media{' '}
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
      <FeedbackForm />
    </div>
  );
}
