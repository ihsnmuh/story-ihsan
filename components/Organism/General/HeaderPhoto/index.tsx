import { motion } from 'framer-motion';
import { varianMotion } from '../../../../helpers/motion';
import styles from './index.module.css';

interface HeaderPhotoProps {
  title: string;
  subTitle: string;
  page: string;
}

export default function HeaderPhoto(props: HeaderPhotoProps) {
  const { title, subTitle, page } = props;

  return (
    <motion.div
      variants={varianMotion(0)}
      initial='before'
      animate='after'
      className={page === 'portofolio' ? styles.containerPorto : styles.containerBlog}
    >
      <div className='layout flex flex-col text-center justify-center'>
        <motion.h1
          variants={varianMotion(0.05)}
          initial='before'
          animate='after'
          className='z-10 mb-2 text-white text-4xl font-bold'
        >
          {title}
        </motion.h1>
        <motion.p
          variants={varianMotion(0.1)}
          initial='before'
          animate='after'
          className='z-10 text-white text-l md:text-xl italic'
        >
          {subTitle}
        </motion.p>
      </div>
    </motion.div>
  );
}
