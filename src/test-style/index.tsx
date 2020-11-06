import React from "react";

import { HTMLLogo } from "./logo.style";
import { HTMLContainer, HTMLImage } from "./style";

import Logo from "./logo.jpeg";

export const TestStyle: React.FC<{}> = () => {
  return (
    <HTMLContainer>
      <p>Необходимо средствами css реализовать логотип указанный ниже:</p>
      <HTMLImage src={Logo} />
      <br />
      <p>Логотип</p>
      <HTMLLogo />
    </HTMLContainer>
  );
};
