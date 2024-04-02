import { styled } from "styled-components";

import Button from "../button";

export const Container = styled.div`
  display: flex;

  width: 100vw;

  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;

  & > div {
    display: flex;

    width: 100%;

    align-items: center;
  }

  a {
    height: fit-content;
  }

  #avatar {
    justify-content: flex-end;
  }

  .header-button {
    height: 35px;
    width: 35px;

    border-radius: 35px;

    overflow: hidden;
  }
`;
