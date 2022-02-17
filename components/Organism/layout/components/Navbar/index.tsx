import { Close, MenuRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import cx from 'classnames';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MUISwitch } from '../../../../Atoms/MUISwitch';
import { FiMoon, FiSun } from 'react-icons/fi';

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
  const [onTop, setOnTop] = useState(true);

  const classLink = cx({
    'm-4 p-2 text-black rounded-md hover:bg-blue-default-blue hover:text-white dark:hover:bg-yellow-500 dark:text-white':
      true,
  });

  const classLinkActive = cx({
    'm-4 text-blue-default-blue font-semibold p-2 border-b-2 border-blue-default-blue hover:border-blue-600 hover:border-y-4 dark:text-yellow-500 dark:border-yellow-400 dark:hover:border-yellow-500':
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

  const handleScroll = () => {
    setOnTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`sticky h-16 top-1 bg-white ${!onTop && 'shadow-sm'} dark:bg-gray-800 z-40`}>
        <div className='layout'>
          <div className='max-w-7xl mx-auto content-center items-center'>
            <div className='flex justify-between items-center'>
              {/* Logo */}
              <div>
                <Link href='/'>
                  <a className='flex items-center p-2'>
                    {/* <img src='/icon/ihsan-logo.svg' alt='ihsan-logo' width='70%' /> */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-10 h-11 fill-current text-blue-default-blue dark:text-yellow-400'
                      viewBox='0 0 42 45'
                    >
                      <g>
                        <path d='M38.333 0H42v3.613h-3.667V0ZM10.667 6.898H7v3.613h3.667V6.898ZM38.333 6.898H42v3.613h-3.667V6.898ZM38.333 13.796H42v17.408h-3.667V13.796Z' />
                        <path
                          d='M31.333 34.49H42V45H0V34.49h3.333v-3.286H0v-10.51h7.333v3.613H3.667v3.284h7v-6.898h3.666v10.511H7v3.285h3.667v6.898h13.666v-3.285H14V34.49h14v6.898h3.333v-6.898ZM35 38.101h3.333v3.285H35v-3.285Zm-28 0H3.667v3.285H7v-3.285Z'
                          fill-rule='evenodd'
                        />
                        <path d='M14.333 13.796H3.667V3.613h10.666V0H0v17.409h14.333v-3.613ZM17.667 0h17.666v17.409h-3.666V3.613H21.333v3.285h7v3.613h-7v3.285h7v3.613h-7V27.59h10.334v-3.284h-7v-3.614h10.666v10.511H17.667V0Z' />
                      </g>
                    </svg>
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
                {/* <MUISwitch defaultChecked={darkMode} onChange={darkModeHandler} /> */}
                <button
                  className='p-2 hidden md:flex hover:text-blue-default-blue dark:hover:text-yellow-400 border-2 rounded-md hover:border-blue-default-blue dark:hover:border-yellow-400'
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                </button>
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
            <li className='text-center py-4'>
              <button
                className='p-2 border-2 rounded-md text-blue-default-blue dark:text-yellow-400 border-blue-default-blue dark:border-yellow-400'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
