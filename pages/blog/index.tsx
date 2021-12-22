import Seo from 'components/Molecules/Seo';
import { getAllPosts } from 'lib/blog/blog-utils';
import BlogComponet from '../../components/Organism/Blog';

export default function BlogPage(props: any) {
  const { posts } = props;

  return (
    <div>
      <Seo title={`Blog | Muhammmad Ihsan`} description={'Welcome to my Blog'} />
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
