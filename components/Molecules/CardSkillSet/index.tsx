import StackTech from '../../Atoms/stackTech';
import cx from 'classnames';

interface CardSkillSetProps {
  category: string;
  stacks: Array<Stacks>;
}

interface Stacks {
  name: string;
  icon: string;
}

export default function CardSkillSet(props: CardSkillSetProps) {
  const { category, stacks } = props;
  const classStack = cx({
    'p-5 rounded-t-2xl text-white text-2xl font-semibold': true,
    'bg-red-500': category === '💼 Working with',
    'bg-yellow-500': category === '💻 Familiar with',
    'bg-green-500': category === '🔍 Exploring with',
  });

  return (
    <div className='transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 w-auto md:w-auto md:h-80 lg:w-96 lg:h-80 bg-blue-50 dark:bg-gray-400 rounded-2xl pb-2 shadow-md'>
      <p className={classStack}>{category}</p>
      <div className='flex flex-wrap justify-center items-center'>
        {stacks.map((stack, idx) => (
          <StackTech key={idx} name={stack.name} icon={stack.icon} />
        ))}
      </div>
    </div>
  );
}
