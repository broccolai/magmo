import { styled } from '@panda/jsx';
import { FlexSection } from '../global/Containers';
import { REGULAR_FONTS, Text, TITLE_FONTS } from '../global/Typography';
import { FaSolidHeart } from '@aminya/solid-icons/fa';

const Container = styled(FlexSection, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
  },
});

const Heart = styled(FaSolidHeart, {
  base: {
    color: 'red !important',
    fontSize: '3rem',
    borderRight: '2px 2px 0 0 black',
    padding: '1rem'
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

const Tag = styled('h4', {
  base: {
    fontFamily: REGULAR_FONTS,
  },
});

const TextContainer = styled('div', {
  base: {
    color: 'black',
    display: 'flex',
    fontSize: '1rem',
  },
});

const Splash = () => (
  <Container>
    <Name>josh taylor</Name>
    {/*<TextContainer>*/}
    {/*  <Heart />*/}
    {/*  <Text>welcome to my personal page,</Text>*/}
    {/*</TextContainer>*/}
  </Container>
);

export default Splash;
