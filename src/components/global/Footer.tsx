import { styled } from '@macaron-css/solid';

import { black, gray, white } from '../utilities/Colors';
import { Text } from './Typography';

const Background = styled('aside', {
  base: {
    backgroundColor: black,
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "-100"
  }
})

const Base = styled('footer', {
  base: {
    backgroundColor: white,
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
    boxSizing: 'border-box',
    color: black,
    display: 'grid',
    justifyContent: 'center',
    padding: '2rem',
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  }
})

const Signature = styled('div', {
  base: {
    paddingTop: '0.5rem'
  }
})

const Footer = () => (
  <Base>
    <Background />
    <Signature>
      <Text color={black}>
        Hi
      </Text>
    </Signature>
  </Base>
);

export default Footer;
