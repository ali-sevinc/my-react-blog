import styled from "styled-components";
import PostItem from "./PostItem";
import { Post } from "@/helpers/types";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: var(--size-2xl);
  align-content: center;
`;

interface PropsType {
  posts: Post[];
}

function Posts({ posts }: PropsType) {
  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Container>
  );
}

export default Posts;
