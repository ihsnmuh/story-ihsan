import classes from './index.module.css';

export default function Footer() {
  return (
    <footer className='py-2 px-20 bg-blue-500 dark:bg-gray-800 h-18 w-full flex justify-center content-center items-center'>
      <p className={classes.container}>
        © 2021 ihsnmuh • Built with Love by Muhammad Ihsan.
      </p>
    </footer>
  );
}
