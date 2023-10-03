import Head from "next/head";

import { Post } from "@/helpers/types";
import { getFeatured } from "@/helpers/posts";

import FeaturedPost from "@/features/main/FeaturedPost";
import Present from "@/features/main/Present";

interface PropsType {
  featured: Post[];
}

function HomePage({ featured }: PropsType) {
  return (
    <>
      <Head>
        <title>{"Ali'nin Blogu"}</title>
        <meta name="description" content="Programlama ile ilgili gönderiler." />
      </Head>
      <Present />
      <FeaturedPost posts={featured} />
    </>
  );
}

export async function getStaticProps() {
  const featured = getFeatured();

  return {
    props: {
      featured: featured,
    },
  };
}

export default HomePage;
