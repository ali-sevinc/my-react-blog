import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { formatDate } from "@/helpers/functions";
import { Post } from "@/helpers/types";

const Li = styled.li`
  box-shadow: var(--shadow-md);
  background-color: var(--color-gray-800);
  color: var(--color-orange-100);
`;
const ImageDiv = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  padding: var(--size-lg);
`;

const H3 = styled.h3`
  margin: var(--size-sm) 0 0 0;
  font-size: var(--size-2xl);
`;

const Time = styled.time`
  font-style: italic;
  color: var(--color-gray-300);
  font-size: var(--size-lg);
`;

const P = styled.p`
  line-height: var(--size-xl);
  padding: var(--size-xl) 0;
  font-size: var(--size-lg);
`;

interface PropsType {
  post: Post;
}

function PostItem({ post }: PropsType) {
  return (
    <Li>
      <Link href={`/posts/${post?.slug}`}>
        <ImageDiv>
          <Image
            src={`/images/posts/${post?.slug}/${post?.image}`}
            alt={post?.title}
            width={300}
            height={200}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </ImageDiv>
        <Content>
          <H3>{post?.title}</H3>
          <Time>{formatDate(post?.date)}</Time>
          <P>{post?.excerpt}</P>
        </Content>
      </Link>
    </Li>
  );
}

export default PostItem;
