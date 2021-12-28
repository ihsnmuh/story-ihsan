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
    'p-5 rounded-t-xl text-white text-2xl font-semibold': true,
    'bg-red-500': category === '💼 Working with',
    'bg-yellow-500': category === '💻 Familiar with',
    'bg-green-500': category === '🔍 Exploring with',
  });

  return (
    <div className='project-card card w-auto md:w-auto sm:h-96 bg-gray-50 dark:bg-gray-400 rounded-xl shadow-md'>
      <p className={classStack}>{category}</p>
      <div className='flex flex-wrap justify-center items-center p-1'>
        {stacks.map((stack, idx) => (
          <StackTech key={idx} name={stack.name} icon={stack.icon} />
        ))}
      </div>
    </div>
  );
}
