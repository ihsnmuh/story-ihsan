import React from 'react';
import Image from 'next/image';

interface CardHoopingProps {
  image: string;
  title: string;
  content: string;
}

export default function CardHope(props: CardHoopingProps) {
  const { image, title, content } = props;
  return (
    <div className='transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 h-90 w-auto lg:w-80 bg-blue-50 dark:bg-gray-600 rounded-2xl shadow-lg m-6 p-8'>
      <div className='flex justify-center content-center mb-6'>
        <Image
          src={`/icon/${image}`}
          height={90}
          width={90}
          className='fill-current text-yellow-100'
        />
      </div>
      <div className='text-3xl font-bold mb-4'>{title}</div>
      <div className='text-xl text-center'>{content}</div>
    </div>
  );
}