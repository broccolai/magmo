import { styled } from '@panda/jsx';
import { FlexSection } from '../global/Containers';
import { TITLE_FONTS } from '../global/Typography';

const Container = styled(FlexSection, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    scrollSnapAlign: 'center',
    overflowY: 'scroll',
  },
});

const Name = styled('h1', {
  base: {
    fontFamily: TITLE_FONTS,
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 200,
    margin: 0,
    textShadow: '2px 2px 0 token(colors.purple), 4px 4px 0 token(colors.accent)',
    //    borderBottom: '4px ridge cyan',
  },
});

const Tag = styled('p', {
  base: {
    fontFamily: TITLE_FONTS,
  },
});

const Seperator = styled('span', {
  base: {
    letterSpacing: '2px',
  },
});

const Splash = () => (
  <Container>
    <Name>josh taylor</Name>
    <Seperator>...</Seperator>
    <Tag>java & web development</Tag>
    {/* <TextContainer> */}
    {/*  <Heart /> */}
    {/*  <Text>welcome to my personal page,</Text> */}
    {/* </TextContainer> */}
  </Container>
);

export default Splash;
