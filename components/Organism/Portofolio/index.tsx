import { ArrowForward, Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Dotes from '../../Atoms/dotes';
import CardPortofolio from '../../Molecules/CardPortofolio';

export default function Portofolio() {
  const router = useRouter();

  function handleAllPortofolio() {
    router.push('/portofolio');
  }

  return (
    <div className='flex flex-col justify-center content-center p-6 lg:px-40 lg:py-20'>
      <Dotes />
      <div className='text-3xl font-bold p-5 text-center'>
        {'<Portofolio/>'}
      </div>
      <div>
        <div>
          <div className='flex flex-col justify-center align-middle md:flex-row md:justify-around'>
            <CardPortofolio
              image='personal-website'
              title='Personal Website'
              category='Personal Project'
              description='A personal website that explains how I love the world of frontend developer'
              stacks={[
                'Typescript',
                'Next Js',
                'React Js',
                'Tailwind',
                'Material UI',
              ]}
              githubLink='https://github.com/ihsnmuh/story-ihsan'
              webLink='/'
            />
            <CardPortofolio
              image='dashboard-mmp'
              title='Matamata Politik Dashboard'
              category='Internal Project'
              description='This project was created to manage the news on the matamatapolitik.com website'
              stacks={[
                'Typescript',
                'Next Js',
                'React Js',
                'Material UI',
                'gRPC',
              ]}
              githubLink=''
              webLink='https://www.matamatapolitik.com'
            />
            <CardPortofolio
              image='qurantara'
              title='Qurantara'
              category='Personal Project'
              description='This website functions as a medium for reading and listening to the Quran, reading hadith, and also viewing prayer schedules based on regions'
              stacks={[
                'Javascript',
                'Vue Js',
                'Bootstrap',
                'Heroku',
                'Firebase',
                'Express Js',
                'Postgresql',
              ]}
              githubLink='https://github.com/ihsnmuh/qurantara-client'
              webLink='https://qurantara-30c57.web.app/'
            />
          </div>
          <div className='flex justify-center'>
            <Button
              onClick={handleAllPortofolio}
              variant='contained'
              className='bg-blue-500 dark:bg-yellow-400 text-white'
              endIcon={<ArrowForward />}
            >
              See All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
