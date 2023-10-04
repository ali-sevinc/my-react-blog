import styled from "styled-components";

export const Container = styled.article`
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
