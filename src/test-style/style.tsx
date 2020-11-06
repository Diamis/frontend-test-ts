import styled from "styled-components";

export const HTMLContainer = styled.div<{}>(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };
});

export const HTMLImage = styled.img<{}>(() => {
  return {
    border: "1px solid #c3c3c3"
  };
});
