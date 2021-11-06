import CardHope from '../../../Molecules/CardHope';

export default function HopeSection() {
  return (
    <div className='flex justify-center content-center text-center p-6 lg:px-40 lg:py-20'>
      <div className='flex flex-col justify-center sm:grid sm:grid-cols-2 xl:grid-cols-3'>
        <CardHope
          image='screen.svg'
          title='Concise'
          content='Focused on writing concise code that conveys its purpose effectively'
        />
        <CardHope
          image='rocket.svg'
          title='Modern'
          content='Trying to stay up to date with modern technology through all sources of information'
        />
        <CardHope
          image='responsive.svg'
          title='Responsive'
          content='Using some framework to accomodate and adapt seamlessly to all device sizes.'
        />
      </div>
    </div>
  );
}
