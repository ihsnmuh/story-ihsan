import styles from './index.module.css';

interface HeaderPhotoProps {
  title: string;
  subTitle: string;
  page: string;
}

export default function HeaderPhoto(props: HeaderPhotoProps) {
  const { title, subTitle, page } = props;

  return (
    <div
      className={
        page === 'portofolio' ? styles.containerPorto : styles.containerBlog
      }
    >
      <h1 className='z-10 mb-2 text-white text-4xl font-bold'>{title}</h1>
      <p className='z-10 text-white text-l md:text-xl italic'>{subTitle}</p>
    </div>
  );
}
