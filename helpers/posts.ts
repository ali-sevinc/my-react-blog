import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { Post } from "./types";

const postsPath = path.join(process.cwd(), "content/posts");

export function getFilePaths() {
  return fs.readdirSync(postsPath);
}

export function getPostData(fileName: string) {
  const slug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsPath, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  const post: Post = {
    id: data.slug,
    /*...data, //or*/
    slug: data.slug,
    title: data.title,
    date: data.date,
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    content,
  };

  return post;
}

export function getPosts() {
  const posts = getFilePaths();

  const postsData = posts.map((post) => getPostData(post));
  return postsData.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeatured() {
  const posts = getPosts();

  const featured = posts.filter((post) => post.isFeatured);
  return featured;
}
