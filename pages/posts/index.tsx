import Head from "next/head";

import { getPosts } from "@/helpers/posts";
import { Post } from "@/helpers/types";

import AllPosts from "@/features/post/AllPosts";

function PostsPage({ posts }: { posts: Post[] }) {
  if (!posts) return <p>Loading...</p>;
  return (
    <>
      <Head>
        <title>Tüm gönderiler</title>
        <meta name="description" content="React ile ilgili gönderiler." />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts: posts,
    },
  };
}

export default PostsPage;
