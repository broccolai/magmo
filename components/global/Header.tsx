import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Text } from '../global/Typography';
import { white } from '../utilities/Colors';

type ContainerProps = {
  reveal: boolean;
};

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

const Image = styled.img`
  border-radius: 100%;
  height: 3rem;
  padding: 1rem;
  width: 3rem;
  z-index: 1;
`;

const Backing = styled.div<ContainerProps>`
  backdrop-filter: blur(6px);
  background: rgba(28, 30, 32, 0.8);
  height: inherit;
  opacity: ${(props) => (props.reveal ? 1 : 0)};
  position: absolute;
  transition: opacity ease 600ms;
  width: inherit;
  z-index: 0;
`;

const Links = styled.div`
  align-items: center;
  display: flex;
  z-index: 1;
`;

const Header = () => {
  const [reveal, toggleReveal] = useState(false);

  const attemptToggle = () => {
    (window.scrollY / window.innerHeight) * 100 > 70
      ? !reveal && toggleReveal(!reveal)
      : reveal && toggleReveal(!reveal);
  };

  useEffect(() => {
    window.addEventListener('scroll', attemptToggle);
    return () => window.removeEventListener('scroll', attemptToggle);
  }, [reveal]);

  return (
    <Container>
      <Backing reveal={reveal} />
      <Link href="/">
        <Logo src="/nav-logo.png" />
      </Link>
      <Links>
        <Text color={white}>broccolai</Text>
        <Image src="/WOMAN.jpg" />
      </Links>
    </Container>
  );
};

export default Header;
