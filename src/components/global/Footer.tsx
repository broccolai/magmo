import { styled } from '@styled/jsx';
import { css } from '@styled/css';

import { FaSolidHandshakeSimple, FaSolidHeart, FaSolidMugHot } from '@aminya/solid-icons/fa';
import { black, gray, white } from '../utilities/Colors';
import { createVariable } from '../utilities/Functions';

const Background = styled('aside', {
  base: {
    backgroundColor: black,
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: '-100',
  },
});

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
    width: '100%',
  },
});

const Signature = styled('div', {
  base: {
    paddingTop: '0.5rem',
  },
});

const iconColor = createVariable('footerIconColor');

const iconStyle = css({
  fontSize: '1.4rem',
  height: '1.4rem',
  marginLeft: '0.6rem',
  marginRight: '0.6rem',
  color: iconColor.wrapped,
});

const Footer = () => (
  <Base>
    <Background />
    <Signature>
      <FaSolidHeart class={iconStyle} style={{ [iconColor.identifier]: '#e90606' }} />
      <FaSolidHandshakeSimple class={iconStyle} style={{ [iconColor.identifier]: gray }} />
      <FaSolidMugHot class={iconStyle} style={{ [iconColor.identifier]: '#6f4e37' }} />
    </Signature>
  </Base>
);

export default Footer;
