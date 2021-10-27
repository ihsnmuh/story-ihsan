import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardPortofolio from '../../Molecules/CardPortofolio';
import HeaderPhoto from '../General/HeaderPhoto';
import { DataPortofolio } from './DataPortofolio';

interface DataType {
  image: string;
  title: string;
  category: string;
  description: string;
  stacks: Array<string>;
  githubLink: string;
  webLink: string;
}

export default function PortofolioComponent() {
  const [currentData, setCurrentData] = useState<DataType[]>([]);
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
    setCurrentData(DataPortofolio.slice(dataOffset, dataOffset + dataPerPage));
    setPageCount(Math.ceil(DataPortofolio.length / dataPerPage));
  }, [dataOffset, dataPerPage]);

  return (
    <>
      <HeaderPhoto
        title='Portofolio'
        subTitle='This page is about all project i have created'
      />
      <div className='flex flex-col justify-center align-middle md:grid md:grid-cols-3 p-5 md:p-10 lg:px-32'>
        {currentData &&
          currentData.map((data, idx) => (
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
      <div className='flex justify-center p-10'>
        <div className='bg-blue-100 dark:bg-gray-400 rounded p-2'>
          <Pagination
            color='primary'
            size='large'
            count={pageCount}
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
