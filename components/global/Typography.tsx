import styled from 'styled-components';
import { black, smoke, white } from '../utilities/Colors';

export const TITLE_FONTS =
  'Sen, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export const REGULAR_FONTS =
  'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export const H1 = styled.h1`
  margin: 0;
  font-family: ${TITLE_FONTS};
  color: ${white};
  letter-spacing: 5px;
`;

export const H4 = styled.h4`
  margin: 0;
  font-family: ${REGULAR_FONTS};
  font-size: 2rem;
  font-weight: 600;
  color: ${smoke};
`;

type TextProps = {
  color?: string;
};

export const Text = styled.p<TextProps>`
  min-height: 22px;
  margin: 0;
  font-family: ${REGULAR_FONTS};
  color: ${(props) => props.color || black};
`;
