import Head from 'next/head';
import BlogComponet from '../../components/Organism/Blog';

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>Blog | Muhammad Ihsan</title>
      </Head>
      <BlogComponet />
    </div>
  );
}
