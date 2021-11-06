import { ArrowForward, Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Dotes from '../../../Atoms/dotes';
import CardPortofolio from '../../../Molecules/CardPortofolio';
import { DataPortofolio } from './portofolioData';

export default function PortofolioSection() {
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
          <div className='flex flex-col justify-center align-middle sm:grid sm:grid-cols-2 xl:grid-cols-3'>
            {DataPortofolio &&
              DataPortofolio.map((data, idx) => (
                <CardPortofolio
                  key={idx}
                  image={data.image}
                  title={data.title}
                  category={data.category}
                  description={data.description}
                  stacks={data.stacks}
                  githubLink={data.githubLink}
                  webLink={data.webLink}
                />
              ))}
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
