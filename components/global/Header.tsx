import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { black, cyan, white } from '../utilities/Colors';

type ContainerProps = {
    reveal: boolean;
};

const Container = styled.header<ContainerProps>`
    background: ${(props) => (props.reveal ? black : 'transparent')};
    color: ${white};
    position: fixed;
    z-index: 1000;
    height: 3rem;
    text-align: center;
    transition: all cubic-bezier(0.45, 0.05, 0.55, 0.95) 0.4s;
    font-family: 'Zilla', monospace;

    padding: 0.2rem;
    right: 0;
    border-bottom-left-radius: 0.5rem;

    @media (max-width: 768px) {
        border-bottom-right-radius: 0.5rem;
        width: 100%;
        padding: 0;
    }
`;

const Logo = styled.img`
    height: 1.8rem;
    padding: 0.6rem;
    cursor: pointer;
`;

const List = styled.ul`
    float: right;
    list-style: none;
    padding: 0.25rem;
    height: 2.5rem;
    margin: 0;
`;

const Item = styled.li`
    line-height: 2.5rem;
    display: inline-block;
    margin: 0 0.5rem;
    transition: all ease 0.5s;

    :hover {
        color: ${cyan};
    }
`;

const Header = () => {
    const [reveal, toggleReveal] = useState(false);

    const attemptToggle = () => {
        window.scrollY > 80 ? !reveal && toggleReveal(!reveal) : reveal && toggleReveal(!reveal);
    };

    useEffect(() => {
        window.addEventListener('scroll', attemptToggle);
        return () => window.removeEventListener('scroll', attemptToggle);
    }, [reveal]);

    return (
        <Container reveal={reveal}>
            <List>
                {/* <Item>
                    <Link href="https://github.com/Broccolai/">
                        <a>GITHUB</a>
                    </Link>
                </Item> */}
            </List>
            <Link href="/">
                <Logo src="/nav-logo.png" />
            </Link>
        </Container>
    );
};

export default Header;
