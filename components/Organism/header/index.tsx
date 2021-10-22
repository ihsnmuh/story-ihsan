import { Button, IconButton } from '@mui/material';
import { GitHub, Download, LinkedIn, Instagram } from '@mui/icons-material';
import Link from 'next/link';
import { SocialMedia } from '../../Atoms/socialMedia';

export default function Header() {
  return (
    <div className='min-h-screen bg-gray-200 p-10 lg:p-20'>
      <div className='space-y-10 lg:space-y-0 lg:space-x-10 lg:space-x-10 lg:grid lg:grid-cols-2'>
        <div className='text-gray-500 space-y-5 md:space-y-10 text-center lg:text-left md:flex md:flex-col md:justify-center'>
          <h2 className='text-black text-4xl md:text-5xl lg:text-6xl font-bold'>
            {'<Hello World! />👋'}
          </h2>
          <p className='text-xl md:text-2xl lg:text-3xl text-gray-900'>
            I’m <b>Ihsan</b>, a <b>Frontend Developer</b> and{' '}
            <b>UI / UX Designer</b>, Base On <b>Jakarta</b>
          </p>
          <div>
            <Button variant='contained' startIcon={<Download />}>
              Download Resume
            </Button>
          </div>
          <div className='divide-blue-500 divide-x'>
            <SocialMedia
              icon={<LinkedIn />}
              socialMedia='LinkedIn'
              link='https://www.linkedin.com/in/ihsanmuhammad19'
            />
            <SocialMedia
              icon={<GitHub />}
              socialMedia='GitHub'
              link='https://github.com/ihsnmuh'
            />
            <SocialMedia
              icon={<Instagram />}
              socialMedia='Instagram'
              link='https://instagram.com/ihsnmuh'
            />
          </div>
        </div>
        <div className=''>
          <div className='w-full h-64 rounded-lg shadow-2xl bg-black'>
            Halow
          </div>
        </div>
      </div>
    </div>
  );
}
