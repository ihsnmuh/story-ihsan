import { Download, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Button } from '@mui/material';
import { SocialMedia } from '../../../Atoms/socialMedia';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function HeaderSection() {
  return (
    <div className='min-h-5/6 bg-blue-100 dark:bg-gray-600 p-12 lg:px-40'>
      <div className='max-w-6xl space-y-10 lg:space-y-0 lg:space-x-10 flex flex-col-reverse lg:space-x-10 lg:flex lg:flex-row'>
        <div className='space-y-5 md:space-y-10 text-center lg:text-left md:flex md:flex-col md:justify-center lg:flex-1'>
          <span className='text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>
            <div className='animate-wiggle'>👋</div>
          </span>
          <h1 className='space-y-1 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-blue-500 dark:text-yellow-400'>
            {
              <Typewriter
                options={{
                  strings: ['Hello World!', 'Selamat Datang!', 'Salam Kenal!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            }
          </h1>
          <p className='text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white'>
            I’m{' '}
            <span className='font-bold text-blue-500 dark:text-yellow-400'>
              Ihsan
            </span>
            , a{' '}
            <span className='font-bold text-blue-500 dark:text-yellow-400'>
              Frontend Developer
            </span>{' '}
            and interest in{' '}
            <span className='font-bold text-blue-500 dark:text-yellow-400'>
              UI / UX Designer
            </span>
            , Based in{' '}
            <span className='font-bold text-blue-500 dark:text-yellow-400'>
              Jakarta
            </span>
          </p>
          <div>
            <Link href='https://drive.google.com/file/d/1rkuoBdLaBgRSqUxd4_Gbl6f7YllaT4S5/view?usp=sharing'>
              <a target='_blank'>
                <Button
                  className='bg-blue-500 dark:bg-yellow-400 dark:hover:bg-yellow-500'
                  variant='contained'
                  startIcon={<Download />}
                >
                  Download Resume
                </Button>
              </a>
            </Link>
          </div>
          <div className='divide-blue-500 divide-x dark:divide-white'>
            <SocialMedia
              icon={
                <LinkedIn className='fill-current text-blue-500 dark:text-white hover:text-blue-600 dark:hover:text-yellow-500' />
              }
              socialMedia='LinkedIn'
              link='https://www.linkedin.com/in/ihsanmuhammad19'
            />
            <SocialMedia
              icon={
                <GitHub className='fill-current text-blue-500 dark:text-white hover:text-blue-600 dark:hover:text-yellow-500' />
              }
              socialMedia='GitHub'
              link='https://github.com/ihsnmuh'
            />
            <SocialMedia
              icon={
                <Instagram className='fill-current text-blue-500 dark:text-white hover:text-blue-600 dark:hover:text-yellow-500' />
              }
              socialMedia='Instagram'
              link='https://instagram.com/ihsnmuh'
            />
          </div>
        </div>
        <div className='relative lg:flex-1'>
          <div className='relative w-full h-full flex justify-center lg:justify-end content-center items-center mb-10 md:mb-10'>
            <div className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 relative shadow-lg h-64 w-64 lg:h-96 lg:w-96 rounded-full bg-transparent border-8 p-2 border-blue-500 dark:border-yellow-400 flex items-center justify-center'>
              <img
                src='/image/Avatar.png'
                className='absolute h-5/6 w-5/6 lg:h-5/6 lg:w-5/6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
