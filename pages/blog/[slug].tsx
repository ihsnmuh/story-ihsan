import Seo from 'components/Molecules/Seo';
import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { timeReading } from 'helpers/readingTime';
import { postFilePaths, postsDirectory } from 'lib/blog/blog-utils';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

type PostType = {
  title: string;
  publishedAt: string;
  description?: string;
  banner?: string;
  tags: string[];
  slug: string;
};

const components = {
  Image,
  Link,
};

type BlogPostSingleProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

export default function BlogPageSingle(props: BlogPostSingleProps) {
  const { source, frontMatter } = props;

  return (
    <>
      <Seo title={`${frontMatter.title} | Muhammmad Ihsan`} description={frontMatter.description} />
      <article className='my-8'>
        <div className='layout'>
          <Image
            alt={`${frontMatter.title}`}
            src={`/image/blog/${frontMatter.banner}`}
            className='object-cover rounded-xl'
            layout='responsive'
            height={600}
            width={1200}
          />
          <h1 className='mb-3 mt-8 text-gray-900 dark:text-white'>{frontMatter.title}</h1>

          <p className='mb-10 text-sm text-gray-500 dark:text-gray-400'>
            Created at {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')} by Muhammad Ihsan • ☕️{' '}
            {timeReading(source.compiledSource)}
          </p>

          <div className='prose dark:prose-dark'>
            <MDXRemote {...source} components={components} />
          </div>
        </div>
      </article>
    </>
  );
}

type Params = { [param: string]: any };

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const postFilePath = path.join(postsDirectory, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
