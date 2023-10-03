import Image from "next/image";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  min-height: 70vh;
  background-color: var(--color-gray-800);
  display: flex;
  flex-direction: column;
  color: var(--color-orange-100);
  align-items: center;
  padding: 0 var(--size-md) var(--size-xl) var(--size-md);
  @media (max-width: 640px) {
    padding: 0 0;
  }
`;

const ImageDiv = styled.div`
  margin: var(--size-5xl) auto var(--size-2xl) auto;
  background-color: var(--color-gray-800);

  @media (max-width: 640px) {
    margin: var(--size-3xl) auto var(--size-2xl) auto;
  }
`;
const H1 = styled.h1`
  padding: 0 var(--size-sm);
`;
const P = styled.p`
  padding: 0 var(--size-sm);
`;

function Present() {
  return (
    <Container>
      <ImageDiv>
        <Image
          width={300}
          height={300}
          src="/images/react-logo.png"
          alt="an logo of ReactJS."
          style={{ borderRadius: "50%", objectFit: "contain" }}
        />
      </ImageDiv>
      <H1>Merhabalar, ben Ali.</H1>
      <P>
        Bu blog sayfası, ReactJS geliştiriciliği ve öğrenme süreci ile ilgili
        yazıları paylaştığım bir platformdur.
      </P>
    </Container>
  );
}

export default Present;
