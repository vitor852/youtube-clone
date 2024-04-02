import React from "react";

import { Container } from "./styles";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <Container>{props.children}</Container>;
};

export default Button;
