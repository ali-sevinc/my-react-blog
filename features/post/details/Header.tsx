import Image from "next/image";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  display: flex;
  margin-bottom: var(--size-xl);
  padding: 0 0 var(--size-xl) 0;
  justify-content: space-between;
  align-items: end;
  border-bottom: var(--size-sm) solid var(--color-orange-500);
  color: var(--color-orange-500);
  img {
    width: 150px;
    height: 75px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  h1 {
    @media (max-width: 640px) {
      font-size: var(--size-2xl);
    }
  }
`;

interface PropsType {
  title: string;
  image: string;
}
function Header({ title, image }: PropsType) {
  return (
    <Container>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ objectFit: "fill" }}
      />
    </Container>
  );
}

export default Header;
