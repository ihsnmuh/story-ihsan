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
    <div className='project-card card flex w-full p-6 justify-center'>
      <Card className='relative w-full h-auto bg-gray-50 dark:bg-gray-700'>
        <div className='absolute right-0 bg-gray-100 rounded-lg p-2 m-2'>
          <Link href={githubLink}>
            <a target='_blank' hidden={githubLink === ''}>
              <IconButton aria-label='github' color='inherit'>
                <GitHub />
              </IconButton>
            </a>
          </Link>
          <Link href={webLink}>
            <a target='_blank' hidden={webLink === ''}>
              <IconButton color='primary' aria-label='website'>
                <Public />
              </IconButton>
            </a>
          </Link>
        </div>
        <CardMedia
          component='img'
          height={300}
          width='full'
          image={`/image/${image}.png`}
          alt={image}
          className='bg-contain bg-center'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className='font-bold dark:text-white'
          >
            {title}{' '}
            <div>
              <Chip label={category} size='small' color='error' />
            </div>
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
                className='m-1'
              />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
