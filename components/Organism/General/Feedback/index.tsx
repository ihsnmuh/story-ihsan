import Dotes from 'components/Atoms/dotes';
import FeedbackForm from 'components/Molecules/FeedbackForm';

export default function Feedback() {
  return (
    <div className='flex flex-col justify-center content-center bg-blue-50 dark:bg-gray-600 py-8 lg:py-20'>
      <div className='layout'>
        <Dotes />
        <div className='text-3xl font-bold p-5 text-center'>{'<Keep in touch/>'}</div>
        <div>
          <p className='lg:text-2xl mb-8 text-center '>
            Feel free to give me feedback or suggestions. You can also reach me at my social media{' '}
            <a
              className='text-blue-default-blue hover:text-blue-600 dark:text-yellow-400 dark:hover:text-yellow-600 font-bold'
              href='https://www.instagram.com/ihsnmuh/'
              target='_blank'
            >
              Instagram
            </a>
            ,{' '}
            <a
              className='text-blue-default-blue hover:text-blue-600 dark:text-yellow-400 dark:hover:text-yellow-600 font-bold'
              href='https://twitter.com/ihcaann'
              target='_blank'
            >
              Twitter
            </a>
          </p>
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
}
