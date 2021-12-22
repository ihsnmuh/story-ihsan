import { Button, Pagination } from '@mui/material';
import CardPost from 'components/Molecules/CardPost';
import { motion } from 'framer-motion';
import { varianMotion } from 'helpers/motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HeaderPhoto from '../General/HeaderPhoto';

export default function BlogComponet(props: any) {
  const { posts } = props;
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(6);
  const [pageCount, setPageCount] = useState(3);
  const [dataOffset, setDataOffset] = useState(0);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    const newOffset = (value - 1) * dataPerPage;
    setDataOffset(newOffset);
  }

  useEffect(() => {
    setCurrentData(posts.slice(dataOffset, dataOffset + dataPerPage));
    setPageCount(Math.ceil(posts.length / dataPerPage));
  }, [dataOffset, dataPerPage]);

  return (
    <>
      <HeaderPhoto title='Blog' subTitle='Welcome to my Blog, I hope you get insight here ' page='blog' />
      <motion.div
        variants={varianMotion(0.2)}
        initial='before'
        animate='after'
        className='flex flex-col justify-center align-middle sm:grid sm:grid-cols-2 xl:grid-cols-3 p-5 md:p-10 xl:px-32'
      >
        {currentData &&
          currentData?.map((data, idx) => (
            <Link key={idx} href={`/blog/${data.slug}`}>
              <a>
                <CardPost
                  title={data.title}
                  publishedAt={data.publishedAt}
                  description={data.description}
                  banner={data.banner}
                  tags={data.tags}
                  content={data.content}
                />
              </a>
            </Link>
          ))}
      </motion.div>
      <div className='flex justify-center p-10'>
        <div className='bg-blue-100 dark:bg-gray-400 rounded p-2'>
          <Pagination color='primary' size='large' count={pageCount} page={page} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}
