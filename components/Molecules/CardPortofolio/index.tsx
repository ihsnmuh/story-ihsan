import { GitHub, Public } from '@mui/icons-material';
import {
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
      <Card className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full h-full bg-gray-100 dark:bg-gray-400'>
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
          <Typography component='div' className='py-2 flex flex-wrap'>
            {stacks.map((stack, idx) => (
              <Chip
                key={idx}
                label={stack}
                size='small'
                variant='filled'
                color='info'
                className='m-1 bg-yellow-500 dark:bg-gray-500'
              />
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={githubLink}>
            <a target='_blank'>
              <IconButton
                aria-label='github'
                className='text-white bg-gray-800 hover:bg-gray-900'
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
                className='text-white bg-blue-500 hover:bg-blue-600 '
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
