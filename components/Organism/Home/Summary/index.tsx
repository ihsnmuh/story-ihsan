import Dotes from '../../../Atoms/dotes';
import Link from 'next/link';

export default function SummarySection() {
  return (
    <div className='flex flex-col justify-center text-center h-5/6 p-6 lg:px-40 lg:py-20'>
      <Dotes />
      <div className='text-3xl font-bold p-5'>{'<Summary/>'}</div>
      <div>
        <p className='lg:text-2xl'>
          Hello! I'm Muhammad Ihsan, graduate of Agricultural Engineering, Bogor Agriculture University. I became a web
          developer, especially Frontend Developer, starting in June 2021. My current tech stacks are React, NextJs,
          Tailwind and Typescrypt. I'm now currently working as a Frontend Developer in at PT. Digital Vision Publishing
          and my last project was developing dashboard for a news website --{' '}
          <Link href='https://www.matamatapolitik.com/'>
            <a target='_blank'>matamatapolitik</a>
          </Link>
          . As a person, curiousity is important to improve my life better by learning something new.
        </p>
      </div>
    </div>
  );
}
