import Image from "next/image";

import ReactMarkdown from "react-markdown";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import { Post as PostType } from "@/helpers/types";
import styled from "styled-components";

import Header from "./Header";
import { Container } from "../../ui/Detail";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

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
