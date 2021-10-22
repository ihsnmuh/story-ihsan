import { IconButton } from '@mui/material';
import Link from 'next/link';

interface socialmediaProps {
  icon: any;
  socialMedia: string;
  link: string;
}

export function SocialMedia(props: socialmediaProps) {
  const { icon, link, socialMedia } = props;
  return (
    <Link href={link}>
      <a target='_blank'>
        <IconButton color='primary' aria-label={socialMedia} component='span'>
          {icon}
        </IconButton>
      </a>
    </Link>
  );
}
