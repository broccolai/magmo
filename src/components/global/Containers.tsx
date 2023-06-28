import { styled } from '@panda/jsx';

export const AbsoluteContainer = styled('div', {
  base: {
    position: 'absolute',
    width: '100%',
  },
});

export const FlexSection = styled('section', {
  base: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export const ChildFlexSection = styled(FlexSection, {
  base: {
    alignItems: 'stretch',
    borderRadius: '2rem 2rem 0 0',
    justifyContent: 'space-evenly',
    marginTop: '-5rem',
    position: 'relative',
  },
});
