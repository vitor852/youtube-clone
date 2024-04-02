import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;

  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;

  box-sizing: content-box;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
