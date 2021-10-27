interface HeaderPhotoProps {
  title: string;
  subTitle: string;
}

export default function HeaderPhoto(props: HeaderPhotoProps) {
  const { title, subTitle } = props;

  return (
    <div className='h-56 flex flex-col space-y-3 justify-center content-center items-center text-center bg-gradient-to-r from-green-400 to-blue-500 dark:from-pink-500 dark:to-yellow-500 p-5'>
      <h1 className='text-white text-4xl font-bold'>{title}</h1>
      <p className='text-l md:text-xl text-white italic'>{subTitle}</p>
    </div>
  );
}
