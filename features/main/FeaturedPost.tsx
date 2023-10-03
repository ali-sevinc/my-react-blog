import styled from "styled-components";

import { Post } from "@/helpers/types";

import Posts from "../post/Posts";

const Container = styled.section`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 640px) {
    width: 90%;
  }
`;

const H2 = styled.h2`
  color: var(--color-gray-800);
  padding: var(--size-3xl) 0 var(--size-4xl) 0;
  font-size: var(--size-4xl);
  @media (max-width: 640px) {
    font-size: var(--size-3xl);
  }
`;

interface PropsType {
  posts: Post[];
}

function FeaturedPost({ posts }: PropsType) {
  return (
    <Container>
      <H2>Öne çıkan gönderiler</H2>
      <Posts posts={posts} />
    </Container>
  );
}

export default FeaturedPost;
