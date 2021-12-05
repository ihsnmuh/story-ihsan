import { getAllPosts } from 'lib/blog/blog-utils';
import Head from 'next/head';
import BlogComponet from '../../components/Organism/Blog';

export default function BlogPage(props: any) {
  const { posts } = props;

  return (
    <div>
      <Head>
        <title>Blog | Muhammad Ihsan</title>
      </Head>
      <BlogComponet posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts(['title', 'publishedAt', 'description', 'banner', 'tags', 'content', 'slug']);

  return {
    props: {
      posts: allPosts,
    },
  };
}
