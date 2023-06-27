import { css } from '@styled/css';
import { styled } from '@styled/jsx';
import type { IconTypes } from '@aminya/solid-icons';
import { createVariable } from '../utilities/Functions';
import { black, soft } from '../utilities/Colors';

const iconSize = createVariable('icon-size');
const iconBackgroundColor = createVariable('icon-background-color');

const iconStyle = css({
  height: iconSize.wrapped,
  width: iconSize.wrapped,
});

const Link = styled('a', {
  base: {
    backgroundColor: iconBackgroundColor.wrapped,
    borderRadius: '50%',
    color: soft,
    display: 'inline-block',
    height: iconSize.wrapped,
    marginRight: '0.6rem',
    padding: '0.6rem',
    transition: 'color 0.4s ease',
    width: iconSize.wrapped,

    ':hover': {
      color: black,
    },
  },
});

interface IconProps {
  href: string;
  Glyph: IconTypes;
  basis: string;
  backing?: string;
  aria: string;
}

const Icon = (props: IconProps) => {
  return (
    <Link
      href={props.href}
      aria-label={props.aria}
      style={{
        [iconSize.identifier]: props.basis,
        [iconBackgroundColor.identifier]: props.backing,
      }}
    >
      <props.Glyph class={iconStyle} />
    </Link>
  );
};

export default Icon;
