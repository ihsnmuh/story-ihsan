import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { MUISwitch } from '../../../../Atoms/MUISwitch';
import cx from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { MenuRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(true);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const classLink = cx({
    'm-4 hover:bg-blue-600 hover:text-white rounded-md p-2 dark:hover:bg-yellow-500':
      true,
  });

  const classLinkActive = cx({
    'm-4 hover:bg-blue-600 hover:text-white rounded-md p-2 bg-blue-500 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white':
      true,
  });

  const classMenu = cx({
    'block py-4 px-4 text-sm text-center hover:bg-blue-600 hover:text-white dark:hover:bg-yellow-500':
      true,
  });

  const classMenuActive = cx({
    'block py-4 px-4 text-sm text-center hover:bg-blue-600 hover:text-white bg-blue-500 dark:bg-yellow-500 text-white':
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
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav className='sticky top-0 bg-white shadow-md dark:bg-gray-800 z-50'>
      <div className='max-w-6xl mx-auto content-center items-center px-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <Link href='/'>
              <a className='flex items-center py-3 px-2 text-gray-500'>
                <img
                  src='/icon/ihsan-logo.svg'
                  alt='ihsan-logo'
                  width='80%'
                  className='fill-current text-green-600'
                />
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
                    <a
                      className={
                        pathname === navbar.link ? classLinkActive : classLink
                      }
                    >
                      {navbar.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Secondary Navbar */}
          <div className='flex items-center'>
            <MUISwitch defaultChecked={darkMode} onChange={darkModeHandler} />
            <div className='md:hidden flex items-center'>
              <IconButton
                color='primary'
                component='span'
                size='large'
                onClick={openNavbarHandler}
              >
                <MenuRounded className='text-blue-500 dark:text-yellow-400 dark:hover:text-yellow-600' />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div
        className={isOpenNavbar ? 'md:hidden bg-gray-100' : 'hidden md:hidden'}
      >
        <ul>
          {navbars.map((navbar, idx) => (
            <li key={idx}>
              <Link href={navbar.link}>
                <a
                  className={
                    pathname === navbar.link ? classMenuActive : classMenu
                  }
                >
                  {navbar.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
