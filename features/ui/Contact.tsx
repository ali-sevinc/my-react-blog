import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-gray-800);
  color: var(--color-orange-100);
  max-width: 50%;
  margin: var(--size-3xl) auto;
  padding: var(--size-2xl) var(--size-lg);
  text-align: center;
  @media (max-width: 1024px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputsContainer = styled.div`
  width: 90%;
  margin: var(--size-xl) auto var(--size-3xl) auto;
  display: flex;
  justify-content: space-between;

  gap: var(--size-xl);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Control = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  input {
    width: 100%;
    color: var(--color-gray-800);
    background-color: var(--color-orange-100);
  }
`;
export const Area = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;

  textarea {
    width: 90%;
    color: var(--color-gray-800);
    background-color: var(--color-orange-100);
  }
`;

export const Actions = styled.div`
  position: relative;
  width: 100%;
  height: var(--size-4xl);
  button {
    position: absolute;
    right: 5%;
    bottom: 0;
    font-size: var(--size-lg);
    font-weight: bold;
    border: none;
    padding: var(--size-sm) var(--size-xl);
    background-color: var(--color-orange-100);
    color: var(--color-gray-800);
  }
  button:hover {
    background-color: var(--color-orange-500);
  }
  button[disabled] {
    background-color: var(--color-gray-500);
  }
`;

export const ErrorMessage = styled.p`
  font-size: var(--size-md);
  color: var(--color-orange-500);
  font-style: italic;
`;
