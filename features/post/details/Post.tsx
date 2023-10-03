import ReactMarkdown from "react-markdown";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import styled from "styled-components";
import Header from "./Header";

import { Post as PostType } from "@/helpers/types";
import Image from "next/image";

const Container = styled.article`
  width: 60%;
  background-color: var(--color-gray-800);
  margin: var(--size-2xl) auto 0 auto;
  padding: var(--size-2xl) var(--size-xl);
  color: var(--color-orange-100);
  border-radius: var(--size-sm);

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 640px) {
    width: 90%;
  }

  h2 {
    font-size: var(--size-2xl);
    margin-bottom: var(--size-lg);
  }
  h3 {
    font-size: var(--size-xl);

    margin-bottom: var(--size-md);
  }

  p {
    font-size: var(--size-lg);
    padding: var(--size-xs);
  }
  a {
    text-decoration: underline;
  }

  a:hover {
    color: var(--color-orange-500);
  }
`;

const ImageContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const HiglighterContainer = styled.div`
  font-size: var(--size-lg);
`;

function Post({ post }: { post: PostType }) {
  const customComponents = {
    a: (link: any) => {
      return (
        <a target="_blank" href={link.href}>
          {link.children}
        </a>
      );
    },
    p: (paragraph: any) => {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <ImageContainer>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={600}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </ImageContainer>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code: (code: any) => {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <HiglighterContainer>
          <SyntaxHighlighter style={atomDark} language={language}>
            {children}
          </SyntaxHighlighter>
        </HiglighterContainer>
      );
    },
  };

  return (
    <Container>
      <Header
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </Container>
  );
}

export default Post;
