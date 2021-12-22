import Seo from 'components/Molecules/Seo';
import { getAllPosts } from 'lib/blog/blog-utils';
import type { NextPage } from 'next';
import HomeComponent from '../components/Organism/Home';

const Home: NextPage = (props: any) => {
  const { posts } = props;

  return (
    <>
      <Seo />
      <HomeComponent posts={posts} />
    </>
  );
};

export default Home;

export function getStaticProps() {
  const allPosts = getAllPosts(['title', 'publishedAt', 'description', 'banner', 'tags', 'content', 'slug']);

  return {
    props: {
      posts: allPosts,
    },
  };
}
