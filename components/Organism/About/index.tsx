import { motion } from 'framer-motion';
import React from 'react';
import { varianMotion } from '../../../helpers/motion';

export default function AboutComponent() {
  return (
    <>
      <main className='justify-center align-middle py-5 md:py-10'>
        <div className='layout'>
          <section>
            <motion.div
              variants={varianMotion(0.1)}
              initial='before'
              animate='after'
              className='mb-8 md:mb-12 font-bold flex flex-col'
            >
              <span className='text-3xl'>About</span>
              <span className='text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500'>
                Muhammad Ihsan
              </span>
            </motion.div>
            <motion.div
              variants={varianMotion(0.2)}
              initial='before'
              animate='after'
              className='float-right m-1 md:ml-2 md:mb-2 w-40 sm:w-72 rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500'
            >
              <img className='rounded-full' src='/image/Avatar.png' width='300' height='300' loading='lazy' />
            </motion.div>
            <article className='text-lg'>
              <motion.p variants={varianMotion(0.2)} initial='before' animate='after' className='mb-8'>
                Hello! I'm Ihsan, graduate of Agricultural Engineering, Bogor Agriculture University. I became a web
                developer especially Frontend Developer starting in June 2021. I started writing my first line code in
                February 2021. At that time I decided to change carreers from various job role starting from sales
                officer, procurement staff, and lastly as a digital marketer in Bogor for 2 years to be a web developer.
                The pandemic forced me to survive more, that's why I decided to learn to be a web developer through
                bootcamps and various udemy courses.
              </motion.p>
              <motion.p variants={varianMotion(0.3)} initial='before' animate='after' className='mb-8'>
                I chose Frontend development because I like something visual like UI design, engineering design and
                everything related to design. Many technologies can be learn from frontend development and that makes me
                want to learn as much as possible. Learning and keep practicing are two things that make me grow and
                improve.
              </motion.p>
              <motion.p variants={varianMotion(0.4)} initial='before' animate='after' className='mb-8'>
                In this website, I dedicate my knowledge in web development and UI/UX that I know through blogs and
                projects I've made before. I believe, sharing information and knowledge that I have make myself grow and
                improve more.
              </motion.p>
            </article>
          </section>

          <section>
            {/* <h2 className='text-3xl font-bold mb-2'>Contact</h2> */}
            <article>
              <motion.p variants={varianMotion(0.5)} initial='before' animate='after' className='mb-8 text-lg'>
                Thank you for visiting my website, if you have any questions don't hesitate to contact me on social
                media or fill out the feedback form below. 😊
              </motion.p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
