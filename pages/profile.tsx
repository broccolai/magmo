import React from 'react';
import styled from 'styled-components';
import { useAuth } from 'use-auth0-hooks';
import { Information } from '../components/elements/Information';
import { FlexContainer } from '../components/global/Containers';
import Layout from '../components/hocs/Layout';
import { black, smoke } from '../components/utilities/Colors';

const Base = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  background: ${black};
  align-items: center;
  justify-content: center;
`;

type ImageContainerProps = {
  image: string;
};

const ImageContainer = styled.button<ImageContainerProps>`
  display: flex;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  background-image: ${(props) => `url(${props.image}) ` || 'none'};
  border: 0;
  outline: none;
  align-items: center;
`;

const Header = styled.h3`
  margin-top: 0;
  font-family: 'Open Sans';
  font-size: 20px;

  font-weight: 600;
  color: ${smoke};
  letter-spacing: 2px;
  grid-column: 1 / 3;
`;

const Line = styled.hr`
  width: 1px;
  height: 40%;
  margin: 2rem;
  background: #8b8b8b;
  border: 0;
`;

const Profile = () => {
  const { user } = useAuth();

  return (
    <Layout title={'Profile'} backing={black}>
      <Base>
        <Header>ACCOUNT DETAILS</Header>

        <FlexContainer>
          <ImageContainer image={user?.picture} />
          <Line />
          <div>
            <Information heading="USERNAME" value={user?.nickname || null} />
            <Information heading="EMAIL" value={user?.email || null} />
            <Information heading="USER ID" value={user?.userid || null} />
          </div>
        </FlexContainer>
      </Base>
    </Layout>
  );
};

export default Profile;
