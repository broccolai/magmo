import React from 'react';
import styled from 'styled-components';
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

const ImageContainer = styled.button`
  display: flex;
  cursor: pointer;
  background: none;
  outline: none;
  align-items: center;
`;

// const Image = styled.img`
//   width: 8rem;
//   border-radius: 8%;
// `;

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
  // const [avatar, setAvatar] = useState(props.avatar);
  // const [pickerOpen, setPickerOpen] = useState(false);

  // const closePicker = (avatar: string) => {
  //   setAvatar(avatar);
  //   setPickerOpen(false);

  //   fetch(process.env.URL + ":3001/users/update", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ token: props.token, avatar: avatar })
  //   });
  // };

  return (
    <Layout title={'Profile'} backing={black}>
      <Base>
        <Header>ACCOUNT DETAILS</Header>

        <FlexContainer>
          <ImageContainer>
            {/* <Image src={"/avatars/" + avatar + ".jpg"} alt="" /> */}
            {/* <p>change</p> */}
          </ImageContainer>
          <Line />
          <div>
            <Information heading="USERNAME" value="username" />
            <Information heading="EMAIL" value={'email'} />
            <Information heading="USER ID" value={'id'} />
          </div>
        </FlexContainer>

        {/* <ImagePicker show={pickerOpen} click={(avatar) => closePicker(avatar)} /> */}
      </Base>
    </Layout>
  );
};

export default Profile;
