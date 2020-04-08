import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from 'use-auth0-hooks';
import { Text } from '../global/Typography';
import { white } from '../utilities/Colors';

type ContainerProps = {
  reveal: boolean;
};

const Container = styled.header`
  position: fixed;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 5rem;
  color: ${white};
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  z-index: 1;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  cursor: pointer;
`;

const Image = styled.img`
  z-index: 1;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 100%;
`;

const Backing = styled.div<ContainerProps>`
  position: absolute;
  z-index: 0;
  width: inherit;
  height: inherit;
  background: rgba(28, 30, 32, 0.8);
  opacity: ${(props) => (props.reveal ? 1 : 0)};
  transition: opacity ease 600ms;
  backdrop-filter: blur(6px);
`;

const Links = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [reveal, toggleReveal] = useState(false);
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, user } = useAuth();

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
        {!isLoading &&
          (isAuthenticated ? (
            <>
              <Link href="/profile">
                <Text color={white}>{user.nickname}</Text>
              </Link>
              <Image src={user.picture} />
            </>
          ) : (
            <button onClick={() => login({ appState: { returnTo: { pathname, query } } })}>Log in</button>
          ))}
        {/* <Link href="/profile">
          <Text color={white}>broccolai</Text>
        </Link>
        <Image src="/WOMAN.jpg" /> */}
      </Links>
    </Container>
  );
};

export default Header;
