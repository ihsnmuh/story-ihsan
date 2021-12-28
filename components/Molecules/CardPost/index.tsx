import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { formatDate } from 'helpers/formatDate';
import { timeReading } from 'helpers/readingTime';
import React from 'react';

interface CardPostProps {
  title: string;
  publishedAt: string;
  description: string;
  banner: string;
  tags: string[];
  content: string;
}

export default function CardPost(props: CardPostProps) {
  const { tags, title, publishedAt, banner, description, content } = props;

  return (
    <div className='project-card card flex w-full p-6 justify-center'>
      <Card className='relative w-full h-auto bg-gray-50 dark:bg-gray-700 rounded-xl'>
        <div className='absolute left-0 bg-gray-100 rounded-lg p-1 m-2'>
          <div className='flex justify-center p-1'>☕️ {timeReading(content)}</div>
        </div>
        <CardMedia
          component='img'
          height='100'
          width='full'
          image={`/image/blog/${banner}`}
          alt={banner}
          className='bg-contain bg-center'
          sx={{
            height: 200,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant='body2' component='div' className='dark:text-white'>
            📆 {formatDate(publishedAt)}
          </Typography>
          <Typography gutterBottom variant='h5' component='div' className='font-bold dark:text-white'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary' className='dark:text-white'>
            {description}
          </Typography>
          <Typography component='div' className='py-2 flex flex-wrap'>
            {tags.map((tag, idx) => (
              <Chip
                key={idx}
                label={tag}
                size='small'
                variant='outlined'
                color='info'
                className='m-1 dark:text-white dark:bg-yellow-400'
              />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
