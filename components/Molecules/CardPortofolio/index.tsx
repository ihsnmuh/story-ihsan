import { GitHub, Public } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import Link from 'next/link';

interface CardPortofolioProps {
  image: string;
  title: string;
  category: string;
  description: string;
  stacks: Array<string>;
  githubLink: string;
  webLink: string;
}

export default function CardPortofolio(props: CardPortofolioProps) {
  const { image, title, category, description, stacks, githubLink, webLink } =
    props;

  return (
    <div className='flex w-full p-6 justify-center'>
      <Card className='w-full h-full dark:bg-gray-400'>
        <CardMedia
          component='img'
          height='140'
          image={`/image/${image}.png`}
          alt={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className='font-bold dark:text-white'
          >
            {title}{' '}
            <Chip
              label={category}
              className='bg-red-500 font-bold text-white dark:bg-gray-600'
              size='small'
            />
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className='dark:text-white'
          >
            {description}
          </Typography>
          <div className='py-2 flex flex-wrap'>
            {stacks.map((stack) => (
              <Chip
                label={stack}
                size='small'
                variant='filled'
                color='info'
                className='m-1 bg-yellow-400 dark:bg-gray-500'
              />
            ))}
          </div>
        </CardContent>
        <CardActions className='bg-gray-100 dark:bg-gray-600 flex content-end'>
          <Link href={githubLink}>
            <a target='_blank'>
              <IconButton
                aria-label='github'
                className='bg-black hover:bg-gray-600 text-white'
                hidden={githubLink === ''}
              >
                <GitHub />
              </IconButton>
            </a>
          </Link>
          <Link href={webLink}>
            <a target='_blank'>
              <IconButton
                aria-label='website'
                className='bg-blue-600 hover:bg-blue-500 text-white'
                hidden={webLink === ''}
              >
                <Public />
              </IconButton>
            </a>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
