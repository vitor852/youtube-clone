// Libs
import { Menu } from "lucide-react";

// Components
import Search from "../search";
import Avatar from "../avatar";
import Button from "../button";

// Styles
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <div className="header-button">
          <Button>
            <Menu size={20} />
          </Button>
        </div>

        <Logo />
      </div>

      <div id="search">
        <Search />
      </div>

      <div id="avatar">
        <Avatar />
      </div>
    </Container>
  );
};

const Logo = () => {
  return (
    <a href="/">
      <img
        src="https://www.gstatic.com/youtube/img/promos/growth/7af769941247a7b3050a743af063a7d2b08b0becec4086951d9505a21ffbdc4e_129x56.webp"
        alt="Youtube"
      />
    </a>
  );
};

export default Header;
