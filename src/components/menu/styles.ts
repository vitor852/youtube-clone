import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
`;

export const MenuButtonClosed = styled.a`
  height: 65px;
  width: 55px;

  overflow: hidden;

  border-radius: 10px;

  button {
    flex-direction: column;

    gap: 10px;

    font-size: 10px;
    font-weight: 400;

    span {
      white-space: nowrap;

      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const MenuButtonOpen = styled.a`
  height: 40px;

  overflow: hidden;

  border-radius: 10px;

  button {
    gap: 10px;

    font-size: 12px;
    font-weight: 400;

    justify-content: flex-start;

    padding: 0 0 0 15px;

    span {
      white-space: nowrap;

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
