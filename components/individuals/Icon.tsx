import React from 'react';
import styled from 'styled-components';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { black, soft } from '../utilities/Colors';

type ContainerTypes = {
  basis: string;
};

const Container = styled(FontAwesomeIcon)<ContainerTypes>`
  height: ${(props) => props.basis};
  width: ${(props) => props.basis};
`;

type LinkTypes = {
  backing?: string;
  basis: string;
};

const Link = styled.a<LinkTypes>`
  background-color: ${(props) => props.backing || 'unset'};
  border-radius: 50%;
  color: ${soft};
  display: inline-block;
  height: ${(props) => props.basis};
  margin-right: 0.6rem;
  padding: 0.6rem;
  transition: color 0.4s ease;
  width: ${(props) => props.basis};

  :hover {
    color: ${black};
  }
`;

type IconProps = {
  href: string;
  icon: IconProp;
  basis: string;
  backing?: string;
};

export const Icon = ({ href, backing, icon, basis }: IconProps) => {
  return (
    <Link href={href} backing={backing} basis={basis}>
      <Container icon={icon} basis={basis} fixedWidth />
    </Link>
  );
};
