import Dotes from '../../../Atoms/dotes';
import CardSkillSet from '../../../Molecules/CardSkillSet';
import { CardStacks } from './DataSkill';

export default function SkillSetSection() {
  return (
    <div className='flex flex-col justify-center content-center text-center p-6 lg:px-40 lg:py-20 bg-blue-100 dark:bg-gray-600'>
      <Dotes />
      <div className='text-3xl font-bold p-5'>{'<Skillsets/>'}</div>
      <div>
        <p className='lg:text-2xl mb-8'>
          A variety of frameworks, libraries and languages that I have had the
          oppurtunity to work with.
        </p>
      </div>
      <div className='flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3'>
        {CardStacks.map((CardStack, idx) => (
          <div key={idx} className='p-6'>
            <CardSkillSet
              category={CardStack.category}
              stacks={CardStack.stacks}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
