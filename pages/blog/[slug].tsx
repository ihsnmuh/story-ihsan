import { useRouter } from 'next/router';
import React from 'react';

export default function BlogPageSingle() {
  const router = useRouter();
  const { slug } = router.query;

  return <div>{slug}</div>;
}
