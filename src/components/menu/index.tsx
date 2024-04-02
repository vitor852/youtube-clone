import { useState } from "react";
import { Home, Play } from "lucide-react";

import Button from "../button";

import { Container, MenuButtonClosed, MenuButtonOpen } from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      icon: Home,
      pathname: "/",
      title: "Home",
    },
    {
      icon: Play,
      pathname: "/subscriptions/",
      title: "Subscriptions",
    },
  ];

  return (
    <Container>
      {options.map(({ icon: Icon, ...rest }) =>
        isOpen ? (
          <Link to={rest.pathname}>
            <MenuButtonOpen className="menu-button" key={rest.pathname}>
              <Button>
                <Icon size={20} />
                <span>{rest.title}</span>
              </Button>
            </MenuButtonOpen>
          </Link>
        ) : (
          <Link to={rest.pathname}>
            <MenuButtonClosed className="menu-button" key={rest.pathname}>
              <Button>
                <Icon size={20} />
                <span>{rest.title}</span>
              </Button>
            </MenuButtonClosed>
          </Link>
        )
      )}
    </Container>
  );
};

export default Menu;
