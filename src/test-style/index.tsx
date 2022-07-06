import React from "react";
import styled from "styled-components";

import { HTMLContainer, HTMLImage } from "./style";

// Отредактируйте HTMLLogo для получения индентичного логотипа
const HTMLLogo = styled.div`
  width: 230px;
  height: 190px;
  border: 1px solid #c3c3c3;
`;

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
