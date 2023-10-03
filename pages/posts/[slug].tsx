import Head from "next/head";
import { GetStaticPropsContext } from "next";

import { getFilePaths, getPostData } from "@/helpers/posts";
import { Post as PostType } from "@/helpers/types";

import Post from "@/features/post/details/Post";

function PostPage({ post }: { post: PostType }) {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Post post={post} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const slug = params?.slug as string;

  const post = getPostData(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 1200,
  };
}

export async function getStaticPaths() {
  const postsNames = getFilePaths();
  const params = postsNames
    .map((name) => name.replace(/\.md$/, ""))
    .map((slug) => ({ params: { slug: slug } }));

  return {
    paths: params,
    fallback: false,
  };
}

export default PostPage;
