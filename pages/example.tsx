import React from 'react';
import styled from 'styled-components';
import Layout from '../components/hocs/Layout';
import { black, smoke, white } from '../components/utilities/Colors';
import withAuthUser from '../lib/pageWrappers/withAuthUser';
import withAuthUserInfo from '../lib/pageWrappers/withAuthUserInfo';
import { MagmoContext } from '../typings/Wrappers';

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

const Image = styled.img`
  width: 8rem;
  border-radius: 8%;
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

const Field = styled.p`
  margin: 0;
  color: ${white};
`;

const SubField = styled.span`
  font-family: 'Open Sans';
  font-size: 12px;
  font-weight: 600;
  color: #8b8b8b;
  letter-spacing: 1px;
`;

const Temp3 = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  margin: 1rem 0;
`;

const Line = styled.hr`
  width: 1px;
  height: 40%;
  margin: 2rem;
  background: #8b8b8b;
  border: none;
`;

type ProfileProps = {
  user: any;
};

const Profile = ({ data }: ProfileProps) => {
  // const [avatar, setAvatar] = useState(props.avatar);
  // const [pickerOpen, setPickerOpen] = useState(false);

  const AuthUser = data.user || null;

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
    <Layout title={'Central | Profile'} backing={black}>
      <Base>
        <Header>ACCOUNT DETAILS</Header>

        <Temp3>
          <ImageContainer onClick={() => setPickerOpen(true)}>
            {/* <Image src={"/avatars/" + avatar + ".jpg"} alt="" /> */}
            {/* <p>change</p> */}
          </ImageContainer>
          <Line />
          <div>
            <Div>
              <SubField>USERNAME</SubField>
              <Field>{AuthUser?.id ? AuthUser.id : '1'}</Field>
            </Div>
            <Div>
              <SubField>EMAIL</SubField>
              {/* <Field>{AuthUser.email}</Field> */}
            </Div>
            <Div>
              <SubField>USER ID</SubField>
              {/* <Field>{AuthUser.email}</Field> */}
            </Div>
          </div>
        </Temp3>

        {/* <ImagePicker show={pickerOpen} click={(avatar) => closePicker(avatar)} /> */}
      </Base>
    </Layout>
  );
};

const mockFetchData = async (userId: any) => ({
  user: {
    ...(userId && {
      id: userId,
    }),
  },
});

Profile.getInitialProps = async (ctx: MagmoContext) => {
  const AuthUserInfo = ctx.customData?.AuthUserInfo || null;
  const AuthUser = AuthUserInfo?.AuthUser || null;

  const data = await mockFetchData(AuthUser?.id);
  console.log(data);

  return {
    data,
  };
};

export default withAuthUser(withAuthUserInfo(Profile));
