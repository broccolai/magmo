// this is adapter from Github/FaisalST32's project 'fullpage-react-fs'
// source: https://github.com/FaisalST32/fullpage-react-fs/blob/master/src/index.js
import type { JSXElement } from 'solid-js';
import { styled } from '@panda/jsx';
import { css } from '@panda/css';
import { createSignal } from 'solid-js';
import { WindowEventListener } from '@solid-primitives/event-listener';
import { createStore } from 'solid-js/store';

export const [panelStore, setPanelStore] = createStore({
  count: 1,
});

const containerStyle = css({
  position: 'relative',
  userSelect: 'none',
  transition: 'all 1s ease',
});

const screenPaneStyle = css({
  overflow: 'hidden',
  height: '100vh',
});

const navigationStyle = css({
  position: 'fixed',
  right: '20px',
  top: '50vh',
  transform: 'translateY(-50%)',
});

const active = css({
  fontSize: '0.8rem',
  lineHeight: '1.5',
});

const indicator = css({
  fontSize: '0.4rem',
  textAlign: 'center',
  transition: 'font-size 200ms ease',
  cursor: 'pointer',
  color: 'purple',
});

const FullPageContainer = (props: { children: JSXElement; count: number }) => {
  const panelsCount = props.count;
  const windowHeight = window.innerHeight;

  // State for view and interaction
  const [viewState, setViewState] = createSignal({
    currentPanel: 1,
    transitioning: false,
    currentTop: 0,
  });

  // Go to the previous section
  const prevSection = () => {
    setViewState((prev) => {
      if (prev.transitioning) {
        return prev;
      }

      if (prev.currentPanel <= 1) {
        return {
          ...prev,
          currentTop: 0,
        };
      }

      setTimeout(() => {
        setViewState((prevNext) => ({ ...prevNext, transitioning: false }));
      }, 1000);

      return {
        transitioning: true,
        currentPanel: prev.currentPanel - 1,
        currentTop: -windowHeight * (prev.currentPanel - 2),
      };
    });
  };

  // Go to the next section
  const nextSection = () => {
    console.log('starting next section');
    setViewState((prev) => {
      if (prev.transitioning) return prev;

      console.log('past transitioning', {
        currentPanel: prev.currentPanel,
        panelsCount,
      });

      if (prev.currentPanel >= panelsCount) {
        return {
          ...prev,
          currentTop: -windowHeight * (panelsCount - 1),
        };
      }
      setTimeout(() => {
        setViewState((prevNext) => ({ ...prevNext, transitioning: false }));
      }, 1000);
      return {
        transitioning: true,
        currentPanel: prev.currentPanel + 1,
        currentTop: -windowHeight * prev.currentPanel,
      };
    });
  };

  // Restore the section when interaction ends
  const restoreSection = () => {
    setViewState((prev) => {
      return {
        ...prev,
        currentTop: -windowHeight * (prev.currentPanel - 1),
      };
    });
  };

  const handleScroll = (e: WheelEvent) => {
    console.log('doing something', {
      panels: panelsCount,
    });
    if (e.deltaY > 40 && viewState().currentPanel < panelsCount) {
      console.log('going next');
      nextSection();
    } else if (e.deltaY < -40 && viewState().currentPanel > 1) {
      console.log('going previous');
      prevSection();
    }
  };

  // Set the active section based on user input
  const onSetSection = (section: number) => {
    setViewState(() => {
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }));
      }, 1000);
      return {
        transitioning: true,
        currentPanel: section,
        currentTop: -windowHeight * (section - 1),
      };
    });
  };

  // window.addEventListener('pointermove', handleDrag);
  // window.addEventListener('resize', updateWindowHeight);

  let touchStartY = 0;

  const [currentPointer, setCurrentPointer] = createSignal(0);

  const handleDrag = (e) => {
    if (touchStartY === 0) {
      return;
    }

    let initialSet = false;
    let difference = 0;
    setCurrentPointer((prev) => {
      if (prev === 0) {
        initialSet = true;
        return e.clientY;
      }

      difference = prev - e.clientY;

      if ((difference < 0 && difference > -2) || (difference > 0 && difference < 2)) {
        initialSet = true;
        return prev;
      }
      return e.clientY;
    });
    if (initialSet) return;

    setViewState((prev) => {
      if (prev.transitioning) {
        return prev;
      }
      return { ...prev, currentTop: prev.currentTop - difference };
    });
  };

  // Handle swipe gestures
  const handleSwipe = (e) => {
    if (e.type === 'touchstart') {
      touchStartY = e.changedTouches[0].screenY;
      return;
    }

    const touchEndY = e.changedTouches[0].screenY;

    const touchDifference = touchStartY - touchEndY;

    if (touchDifference < -100) {
      prevSection();
    } else if (touchDifference > 100) {
      nextSection();
    } else {
      restoreSection();
    }

    touchStartY = 0;
    setCurrentPointer(0);
  };

  return (
    <>
      <WindowEventListener onWheel={handleScroll} />

      <div class={screenPaneStyle}>
        {currentPointer() !== 0 && <div class="clickMask" />}
        <div class={containerStyle} style={{ top: `${viewState().currentTop}px` }}>
          {props.children}
          <NavIndicators count={panelsCount} activeIndex={viewState().currentPanel} setIndicator={onSetSection} />
        </div>
      </div>
    </>
  );
};

const NavIndicators = (props: { count: number; activeIndex: number; setIndicator: (section: number) => void }) => {
  const indicatorHtml = Array.from({ length: props.count }, (_, i) => {
    const indicatorStyles = [indicator, i === props.activeIndex - 1 && active];
    return (
      <div class={indicatorStyles} onClick={() => props.setIndicator(i + 1)}>
        &#11044;
      </div>
    );
  });

  return <div class={navigationStyle}>{indicatorHtml}</div>;
};

const Panel = styled('section', {
  base: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
  },
});

export { FullPageContainer, Panel };
