import { styled } from '@panda/jsx';
import { createVariable } from '../utilities/functions.ts';

const iconSize = createVariable('icon-size');

const Link = styled('a', {
  base: {
    backgroundColor: 'grey',
    borderRadius: '50%',
    color: 'soft',
    display: 'inline-block',
    height: iconSize.wrapped,
    marginRight: '0.6rem',
    padding: '0.6rem',
    transition: 'color 0.4s ease',
    width: iconSize.wrapped,

    //    ':hover': {
    //      color: 'black',
    //    },
  },
});

interface IconProps {
  href: string;
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
      }}
    ></Link>
  );
};

export default Icon;
