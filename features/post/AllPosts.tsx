import styled from "styled-components";
import Posts from "./Posts";
import { Post } from "@/helpers/types";

const Container = styled.section`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 95%;
  }
`;
const H1 = styled.h1`
  color: var(--color-gray-800);
  padding: var(--size-3xl) var(--size-md);
`;

interface PropsType {
  posts: Post[];
}

function AllPosts({ posts }: PropsType) {
  return (
    <Container>
      <H1>Tüm Gönderiler</H1>
      <Posts posts={posts} />
    </Container>
  );
}

export default AllPosts;
