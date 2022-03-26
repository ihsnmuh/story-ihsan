import Dotes from '../../../Atoms/dotes';
import Link from 'next/link';

export default function SummarySection() {
  return (
    <div className='layout flex flex-col justify-center h-5/6 py-6 lg:py-20'>
      <Dotes />
      <div className='text-3xl font-bold p-5 text-center'>{'<Summary/>'}</div>
      <div>
        <p className='lg:text-2xl text-left lg:text-center'>
          Hello! I'm Muhammad Ihsan, graduate of Agricultural Engineering, Bogor Agriculture University. I became a web
          developer, especially Frontend Developer, starting in June 2021. My current tech stacks are React, NextJs,
          Tailwind and Typescrypt. I'm now currently working as a Junior Frontend Developer at{" "}
          <Link href='https://femaledaily.com/'>
            <a target='_blank'>Female Daily Network</a>
          </Link>
          . As a person, curiousity is important to improve my life better by learning something new.
        </p>
      </div>
    </div>
  );
}
