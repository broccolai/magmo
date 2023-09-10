import { styled } from '@panda/jsx';
import { WiDaySunny } from '@aminya/solid-icons/wi';
import { createEffect, createSignal } from 'solid-js';
import { PageBanner, PageBannerContent } from './containers.tsx';
import { createVariable } from '../utilities/functions.ts';
import { panelState } from '../panels/container.tsx';

const showIcon = createVariable('header-show-icon');

const Icon = styled('div', {
  base: {
    opacity: 'var(--header-show-icon)',
    transition: 'opacity 0s ease-out 100ms',
  },
});

const Right = styled('p', {
  base: {
    textAlign: 'right',
    display: 'none',
  },
});

const FIRST_PANEL = 1;

const Header = () => {
  let previousState = panelState();
  const [show, setShow] = createSignal(false);

  createEffect(() => {
    const currentState = panelState();
    const storedPanel = previousState.currentPanel;

    previousState = currentState;

    if (storedPanel > FIRST_PANEL && currentState.currentPanel === FIRST_PANEL && currentState.transitioning) {
      setShow(false);
      return;
    }

    if (currentState.currentPanel > FIRST_PANEL && !currentState.transitioning) {
      setShow(true);
    }
  });

  return (
    <PageBanner top={0}>
      <PageBannerContent>
        <Icon style={{ [showIcon.identifier]: show() ? '1' : '0' }}>josh</Icon>
        <Right>
          <WiDaySunny />
        </Right>
      </PageBannerContent>
    </PageBanner>
  );
};

export default Header;