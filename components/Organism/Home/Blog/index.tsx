import { ArrowForward, Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import CardPost from 'components/Molecules/CardPost';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Dotes from '../../../Atoms/dotes';
import Link from 'next/dist/client/link';

export default function BlogSection(props: any) {
  const router = useRouter();
  const { posts } = props;
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [dataPerPage, setDataPerPage] = useState(3);
  const [dataOffset, setDataOffset] = useState(0);

  useEffect(() => {
    setCurrentData(posts.slice(dataOffset, dataOffset + dataPerPage));
  }, []);

  function handleAllBlog() {
    router.push('/blog');
  }

  return (
    <div className='flex flex-col justify-center content-center py-6 pb-6 lg:pb-20'>
      <div className='layout'>
        <Dotes />
        <div className='text-3xl font-bold p-5 text-center'>{'<Blog/>'}</div>
        <div>
          <div>
            <div className='flex flex-col justify-center align-middle sm:grid sm:grid-cols-2 xl:grid-cols-3'>
              {currentData &&
                currentData.map((data, idx) => (
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
            </div>
            <div className='flex justify-center p-5'>
              <Button
                onClick={handleAllBlog}
                variant='contained'
                className='bg-blue-default-blue dark:bg-yellow-400 text-white'
                endIcon={<ArrowForward />}
              >
                See All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
