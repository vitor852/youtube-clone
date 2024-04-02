import { Search as SearchIcon, Keyboard as KeyboardIcon } from "lucide-react";

import {
  Container,
  Input,
  SearchButton,
  InputContainer,
  VirtualKeyboardButton,
} from "./styles";

const Search = () => {
  return (
    <Container>
      <InputContainer className="input-container">
        <Input placeholder="Pesquisar" />

        <VirtualKeyboardButton>
          <KeyboardIcon size={18} />
        </VirtualKeyboardButton>
      </InputContainer>

      <SearchButton className="submit-button">
        <SearchIcon size={18} />
      </SearchButton>
    </Container>
  );
};

export default Search;
