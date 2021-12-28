import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { MUISwitch } from '../../../../Atoms/MUISwitch';
import cx from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { Close, MenuRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AnimateSharedLayout, motion } from 'framer-motion';

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(true);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const classLink = cx({
    'm-4 p-2 text-black rounded-md hover:bg-blue-default-blue hover:text-white dark:hover:bg-yellow-500 dark:text-white':
      true,
  });

  const classLinkActive = cx({
    'm-4 text-blue-default-blue font-semibold p-2 border-b-4 border-blue-default-blue hover:border-blue-600 hover:border-y-4 dark:text-yellow-500 dark:border-yellow-400 dark:hover:border-yellow-500':
      true,
  });

  const classMenu = cx({
    'block py-4 px-4 text-sm text-center hover:bg-blue-default-blue hover:text-white dark:hover:bg-yellow-500 text-black dark:text-white':
      true,
  });

  const classMenuActive = cx({
    'block py-4 px-4 text-sm text-center hover:bg-blue-default-blue hover:text-white bg-blue-default-blue dark:bg-yellow-500 text-white':
      true,
  });

  function openNavbarHandler() {
    setIsOpenNavbar(!isOpenNavbar);
  }

  function darkModeHandler() {
    setDarkMode(!darkMode);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const navbars = [
    { name: 'Home', link: '/' },
    { name: 'Portofolio', link: '/portofolio' },
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
  ];

  return (
    <nav className='sticky top-0 bg-white shadow-md dark:bg-gray-800 z-50'>
      <div className='max-w-7xl mx-auto content-center items-center px-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <Link href='/'>
              <a className='flex items-center py-3 px-2 text-gray-500'>
                <img src='/icon/ihsan-logo.svg' alt='ihsan-logo' width='80%' className='fill-current text-green-600' />
                {/* <span>Ihsan</span> */}
              </a>
            </Link>
          </div>
          {/* Primary Navbar */}
          <div>
            <ul className='md:flex items-center space-x-1 hidden'>
              {navbars.map((navbar, idx) => (
                <li key={idx}>
                  <Link href={navbar.link}>
                    <a className={pathname === navbar.link ? classLinkActive : classLink}>{navbar.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Secondary Navbar */}
          <div className='flex items-center'>
            <MUISwitch defaultChecked={darkMode} onChange={darkModeHandler} />
            <div className='md:hidden flex items-center'>
              <IconButton color='primary' component='span' size='large' onClick={openNavbarHandler}>
                {isOpenNavbar ? (
                  <Close
                    fontSize='large'
                    className='text-blue-default-blue dark:text-yellow-400 dark:hover:text-yellow-600'
                  />
                ) : (
                  <MenuRounded
                    fontSize='large'
                    className='text-blue-default-blue dark:text-yellow-400 dark:hover:text-yellow-600'
                  />
                )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div className={isOpenNavbar ? 'md:hidden bg-gray-100 dark:bg-gray-900' : 'hidden md:hidden'}>
        <ul>
          {navbars.map((navbar, idx) => (
            <li key={idx} onClick={openNavbarHandler}>
              <Link href={navbar.link}>
                <a className={pathname === navbar.link ? classMenuActive : classMenu}>{navbar.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
