import styled from 'styled-components';

import { black, soft, white } from '../utilities/Colors';

export const TITLE_FONTS =
  'Sen, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export const REGULAR_FONTS =
  'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export const H1 = styled.h1`
  color: ${white};
  font-family: ${TITLE_FONTS};
  font-size: clamp(4rem, 10vw, 6rem);
  letter-spacing: 5px;
  margin: 0;
  text-align: center;
`;

export const H2 = styled.h1`
  color: ${white};
  font-family: ${TITLE_FONTS};
  font-size: clamp(1rem, 8vw, 1.8rem);
  letter-spacing: 4px;
  margin: 0;
  text-align: center;
`;

export const H3 = styled.h3`
  font-family: ${TITLE_FONTS};
  font-size: 2.4rem;
  margin: 0;

  text-align: center;
`;

export const H4 = styled.h4`
  font-family: ${REGULAR_FONTS};
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 600;
  margin: 0;

  text-align: center;
`;

export const Bold = styled.b`
  font-family: ${REGULAR_FONTS};
  line-height: 3;
`;

type TextProps = {
  color?: string;
};

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color || black};
  font-family: ${REGULAR_FONTS};
  line-height: 1.6;
  margin: 0;
`;

export const FooterText = styled.p`
  bottom: 0;
  color: ${soft};
  font-family: ${REGULAR_FONTS};
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1;
  position: absolute;
  text-align: center;
  width: 100%;
`;
