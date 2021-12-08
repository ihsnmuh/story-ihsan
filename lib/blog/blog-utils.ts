import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type PostItems = {
  [key: string]: string;
};

export const postsDirectory = join(process.cwd(), 'contents/blog');

export const postFilePaths = fs.readdirSync(postsDirectory).filter((path) => /\.mdx?$/.test(path));

export function getPostFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(slug: string, fields: string[] = []): PostItems {
  const postSlug = slug.replace(/\.mdx$/, ''); // remove the file extension
  const filePath = join(postsDirectory, `${postSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const items: PostItems = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = postSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): PostItems[] {
  const slugs = getPostFiles();
  const posts = slugs
    .map((slug) => getPostData(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
  return posts;
}
