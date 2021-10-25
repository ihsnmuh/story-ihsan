import { Tooltip } from '@mui/material';
import Image from 'next/image';

interface StackProps {
  name: string;
  icon: string;
}

export default function StackTech(props: StackProps) {
  const { name, icon } = props;
  return (
    <div>
      <div className='m-2 items-center content-center text-center rounded'>
        <Tooltip title={name} arrow>
          <div className='flex justify-center items-center p-3 bg-white rounded '>
            <Image src={`/logo/${icon}`} height={30} width={30} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
