import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { MUISwitch } from '../../../../Atoms/MUISwitch';
import cx from 'classnames';
import { useRouter } from 'next/dist/client/router';

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(true);
  const classLink = cx({
    'm-4 hover:bg-blue-300 rounded-md p-2': true,
  });

  const classLinkActive = cx({
    'm-4 hover:bg-blue-300 rounded-md p-2 bg-blue-300': true,
  });

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
    <header className='shadow-xl mx-auto py-2 px-20 bg-white rounded-b-2xl dark:bg-gray-800 h-20 w-4/5 flex justify-between content-center items-center'>
      <Link href='/'>
        <a>
          <img src='/icon/ihsan-logo.svg' alt='ihsan-logo' width='100%' />
        </a>
      </Link>
      <nav>
        <ul className='flex justify-around'>
          {navbars.map((navbar) => (
            <li>
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
      </nav>
      <MUISwitch defaultChecked={darkMode} onChange={darkModeHandler} />
    </header>
  );
}
