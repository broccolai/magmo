import { styled } from '@panda/jsx';

export const FullPageContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    maxWidth: '800px',
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
    alignItems: 'stretch !important',
    borderRadius: '2rem 2rem 0 0',
    justifyContent: 'space-evenly !important',
    marginTop: '-5rem',
    position: 'relative',
  },
});
