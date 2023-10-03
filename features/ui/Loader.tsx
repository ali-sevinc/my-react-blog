import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Load = styled.div`
  border-width: var(--size-xs);
  border-style: solid;
  background: transparent;
  border-color: var(--color-gray-600) var(--color-gray-600)
    var(--color-gray-600) transparent;
  width: var(--size-2xl);
  height: var(--size-2xl);
  border-radius: 50%;
  position: relative;
  animation: spin 2s infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return (
    <Container>
      <Load />
    </Container>
  );
}
