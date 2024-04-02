import { useState } from "react";
import { Home, Play } from "lucide-react";

import Button from "../button";

import { Container, MenuButtonClosed, MenuButtonOpen } from "./styles";

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
          <MenuButtonOpen
            className="menu-button"
            href={rest.pathname}
            key={rest.pathname}
          >
            <Button>
              <Icon size={20} />
              <span>{rest.title}</span>
            </Button>
          </MenuButtonOpen>
        ) : (
          <MenuButtonClosed
            className="menu-button"
            href={rest.pathname}
            key={rest.pathname}
          >
            <Button>
              <Icon size={20} />
              <span>{rest.title}</span>
            </Button>
          </MenuButtonClosed>
        )
      )}
    </Container>
  );
};

export default Menu;
