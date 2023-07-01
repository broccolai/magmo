import { styled } from '@panda/jsx';
import { WiDaySunny } from '@aminya/solid-icons/wi';
import { PageBanner, PageBannerContent } from './Containers';
import { createEffect, createSignal } from 'solid-js';
import { createVariable } from '../utilities/Functions';

const showIcon = createVariable('header-show-icon');

const Icon = styled('div', {
  base: {
    display: 'var(--header-show-icon)',
  },
});

const Right = styled('p', {
  base: {
    textAlign: 'right',
    display: 'none',
  },
});

const Header = () => {
  const [show, setShow] = createSignal(false);

  createEffect(() => {
    document.addEventListener('scroll', () => {
      const shouldShowNow = window.scrollY >= window.innerHeight;

      if (show() !== shouldShowNow) {
        setShow(shouldShowNow);
      }
    });
  });

  return (
    <PageBanner>
      <PageBannerContent>
        <Icon style={{ [showIcon.identifier]: show() ? 'block' : 'none' }}>josh</Icon>
        <Right>
          <WiDaySunny />
        </Right>
      </PageBannerContent>
    </PageBanner>
  );
};

export default Header;
