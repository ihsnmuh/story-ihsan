import React from 'react';
import Feedback from '../General/Feedback';

export default function AboutComponent() {
  return (
    <>
      <main className='justify-center align-middle p-5 md:p-10 xl:px-40'>
        <section>
          <div className='mb-8 md:mb-12 font-bold flex flex-col'>
            <span className='text-3xl'>About</span>
            <span className='text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500'>
              Muhammad Ihsan
            </span>
          </div>
          <div className='float-right md:ml-2 md:mb-2 w-40 sm:w-72 rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500'>
            <img
              className='rounded-full'
              src='/image/Avatar.png'
              width='300'
              height='300'
              loading='lazy'
            />
          </div>
          <article className='text-lg'>
            <p className='mb-8'>
              Hello! I'm Ihsan, graduate of Agricultural Engineering, Bogor
              Agriculture University. I became a web development especially
              frontend development starting in June 2021. I started writing my
              first line code in February 2021. At the time i decided to change
              carreers from various job role from sales officer, procurement
              staff, and last job as a digital marketer in Bogor for 2 years to
              be web development. The pandemic forced me to survive more, that's
              why i decided to learn to be a web developer through bootcamps and
              various udemy courses.
            </p>
            <p className='mb-8'>
              Why i chosen Frontend development? because i like something visual
              like UI design, engineering design and other. Many technologies
              can be learn at frontend development, so that makes me exited to
              learn as much as possible. Learn and keep practicing makes me to
              be better.
            </p>
            <p className='mb-8'>
              In this website, I dedicate my knowledge in web development and
              UI/UX that i know through blogs and also project have i made
              before. I believe, with sharing information and knowledge that i
              have, make myself grew up and improve.
            </p>
          </article>
        </section>

        <section>
          <h2 className='text-3xl font-bold mb-2'>Contact</h2>
          <article>
            <p className='mb-8 text-lg'>
              Thank you for visiting my website, if you have any questions don't
              hesitate to contact me on social media or fill out the feedback
              form below. 😊
            </p>
          </article>
        </section>
      </main>
      <Feedback />
    </>
  );
}
