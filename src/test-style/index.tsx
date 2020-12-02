import React from "react";

import { HTMLLogo } from "./logo.style";
import { HTMLContainer, HTMLImage } from "./style";

export const TestStyle: React.FC<{}> = () => {
  return (
    <HTMLContainer>
      <p>Необходимо средствами css реализовать логотип указанный ниже:</p>
      <HTMLImage src="https://github.com/Diamis/frontend-test-ts/blob/main/public/logo.jpeg?raw=true" />
      <br />
      <p>Логотип</p>
      <HTMLLogo />
    </HTMLContainer>
  );
};
