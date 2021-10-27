import Dotes from '../../../Atoms/dotes';

export default function SummarySection() {
  return (
    <div className='flex flex-col justify-center text-center h-5/6 p-6 lg:px-40 lg:py-20'>
      <Dotes />
      <div className='text-3xl font-bold p-5'>{'<San is/>'}</div>
      <div>
        <p className='lg:text-2xl'>
          a non-stop learner, his most effective way to learn things are doing
          trial and evaluation. He is interested in Fullstack Developer. Small
          and medium enterprises (UMKM) life taught him to measure what matters
          and plan things properly. As a person, curiosity is important to
          improve his life better by learning something new.
        </p>
      </div>
    </div>
  );
}
