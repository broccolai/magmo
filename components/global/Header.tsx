import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { white } from '../utilities/Colors';

const Container = styled.header`
  align-items: center;
  color: ${white};
  display: flex;
  height: 5rem;
  justify-content: space-between;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 3rem;
  padding: 1rem;
  width: 3rem;
  z-index: 1;
`;

const Header = () => (
  <Container>
    <Link href="/">
      <Logo src="/nav-logo.png" />
    </Link>
  </Container>
);

export default Header;
