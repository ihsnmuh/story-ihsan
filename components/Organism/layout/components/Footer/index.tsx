import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import { BarRainbow } from 'components/Atoms/BarRainbow';
import { getYearNow } from 'helpers/formatDate';
import { SocialMedia } from '../../../../Atoms/socialMedia';

export default function Footer() {
  return (
    <footer className='bg-blue-default-blue dark:bg-gray-800 h-18'>
      <div className='layout'>
        <div className='py-5 md:flex md:justify-between justify-center content-center items-center w-full'>
          <p className='text-white h-10 flex items-center mb-5 md:mb-0 lg:mb-0 text-center justify-center'>
            © {getYearNow()} ihsnmuh • Built with ❤️ by Muhammad Ihsan.
          </p>
          <div className='divide-white divide-x text-center'>
            <SocialMedia
              icon={<Mail className='fill-current text-white hover:text-blue-600 dark:hover:text-yellow-500' />}
              socialMedia='Email'
              link='mailto:muhaammadihsan@gmail.com'
            />
            <SocialMedia
              icon={<LinkedIn className='fill-current text-white hover:text-blue-600 dark:hover:text-yellow-500' />}
              socialMedia='LinkedIn'
              link='https://www.linkedin.com/in/ihsanmuhammad19'
            />
            <SocialMedia
              icon={<GitHub className='fill-current text-white hover:text-blue-600 dark:hover:text-yellow-500' />}
              socialMedia='GitHub'
              link='https://github.com/ihsnmuh'
            />
            <SocialMedia
              icon={<Instagram className='fill-current text-white hover:text-blue-600 dark:hover:text-yellow-500' />}
              socialMedia='Instagram'
              link='https://instagram.com/ihsnmuh'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
