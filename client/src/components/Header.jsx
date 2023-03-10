import React from "react";

import styled from "styled-components";

import { Container } from "./Container";

const HeaderEl = styled.header`
  background-color: var(--color-bg);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
`;

const Logo = styled.div`
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  color: #6495ed;
`;

function Header() {
  return (
    <>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Logo>REACT finance</Logo>
          </Wrapper>
        </Container>
      </HeaderEl>
    </>
  );
}

export default Header;
