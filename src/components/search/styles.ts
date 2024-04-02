import { styled } from "styled-components";

export const Container = styled.label`
  display: flex;

  width: 100%;

  align-items: center;

  border-radius: 30px;

  button {
    cursor: pointer;
  }

  .input-container,
  .submit-button {
    border: 1px solid #303030;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  width: 100%;

  align-items: center;

  padding: 0 15px;

  border-radius: 30px 0 0 30px;
`;

export const VirtualKeyboardButton = styled.button`
  height: 20px;

  color: #a0a0a0;

  &:hover {
    color: #f1f1f1;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;

  &:focus-within {
    border-color: #1b62b9;
  }
`;

export const SearchButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 38px;

  padding: 0 20px;

  border-left: 0;
  border-radius: 0 30px 30px 0;

  color: #f1f1f1;

  background-color: #222;
`;
