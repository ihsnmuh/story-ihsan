import CardHope from '../../../Molecules/CardHope';

export default function HopeSection() {
  return (
    <div className='layout flex justify-center content-center text-center pb-6 lg:pb-20'>
      <div className='justify-center sm:grid sm:grid-cols-2 xl:grid-cols-3'>
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
