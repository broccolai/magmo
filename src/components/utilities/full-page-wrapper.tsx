// this is adapter from Github/FaisalST32's project 'fullpage-react-fs'
// source: https://github.com/FaisalST32/fullpage-react-fs/blob/master/src/index.js
import type { JSXElement } from 'solid-js';
import { createSignal, onCleanup } from 'solid-js';
import { useRef, useEffect } from 'solid-js/web';
import styles from './styles.module.css';

const FullPageContainer = (props) => {
  const panelsCount = props.children.length;
  const windowHeight = useRef(window.innerHeight);

  // State for view and interaction
  const [viewState, setViewState] = createSignal({
    currentPanel: 1,
    transitioning: false,
    currentTop: 0,
  });

  // Go to the previous section
  const prevSection = () => {
    setViewState((prev) => {
      if (prev.transitioning) return prev;
      if (prev.currentPanel <= 1)
        return {
          ...prev,
          currentTop: 0,
        };
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }));
      }, 1000);
      return {
        transitioning: true,
        currentPanel: prev.currentPanel - 1,
        currentTop: -windowHeight.current * (prev.currentPanel - 2),
      };
    });
  };

  // Go to the next section
  const nextSection = () => {
    setViewState((prev) => {
      if (prev.transitioning) return prev;

      if (prev.currentPanel >= panelsCount)
        return {
          ...prev,
          currentTop: -windowHeight.current * (panelsCount - 1),
        };
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }));
      }, 1000);
      return {
        transitioning: true,
        currentPanel: prev.currentPanel + 1,
        currentTop: -windowHeight.current * prev.currentPanel,
      };
    });
  };

  // Restore the section when interaction ends
  const restoreSection = () => {
    setViewState((prev) => {
      return {
        ...prev,
        currentTop: -windowHeight.current * (prev.currentPanel - 1),
      };
    });
  };

  // Handle scroll events for section navigation
  const handleScroll = (e) => {
    if (e.deltaY > 40 && viewState().currentPanel < panelsCount) {
      nextSection();
    } else if (e.deltaY < -40 && viewState().currentPanel > 1) {
      prevSection();
    }
  };

  // Set the active section based on user input
  const onSetSection = (sectionNumber) => {
    setViewState((prev) => {
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }));
      }, 1000);
      return {
        transitioning: true,
        currentPanel: sectionNumber,
        currentTop: -windowHeight.current * (sectionNumber - 1),
      };
    });
  };

  // Remove event listeners when the component unmounts
  const removeEventListeners = () => {
    window.removeEventListener('wheel', handleScroll);
    window.removeEventListener('touchstart', handleSwipe);
    window.removeEventListener('touchend', handleSwipe);
    window.removeEventListener('pointerdown', handleSwipe);
    window.removeEventListener('pointerup', handleSwipe);
    window.removeEventListener('pointermove', handleDrag);
    window.removeEventListener('resize', updateWindowHeight);
  };

  // Set up event listeners on component mount
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleSwipe);
    window.addEventListener('touchend', handleSwipe);
    window.addEventListener('pointerdown', handleSwipe);
    window.addEventListener('pointerup', handleSwipe);
    window.addEventListener('pointermove', handleDrag);
    window.addEventListener('resize', updateWindowHeight);
    onCleanup(() => {
      removeEventListeners();
    });
  }, []);

  // Track touch start position for swipe gestures
  const touchStartY = useRef(0);

  // Track current pointer position for drag gestures
  const [currentPointer, setCurrentPointer] = createSignal(0);

  // Handle dragging interaction
  const handleDrag = (e) => {
    if (touchStartY.current === 0) {
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
      touchStartY.current = e.changedTouches[0].screenY;
      return;
    }

    const touchEndY = e.changedTouches[0].screenY;

    const touchDifference = touchStartY.current - touchEndY;

    if (touchDifference < -100) {
      prevSection();
    } else if (touchDifference > 100) {
      nextSection();
    } else {
      restoreSection();
    }

    touchStartY.current = 0;
    setCurrentPointer(0);
  };

  // Style classes for panels container
  const panelsstyles = [styles.panelsContainer, viewState().transitioning && styles.panelTransitioning];

  return (
    <div class={styles.screenPane}>
      {currentPointer() !== 0 && <div class={styles.clickMask} />}
      <div class={panelsstyles.join(' ')} style={{ top: `${viewState().currentTop}px` }}>
        {props.children}
        {showIndicators && (
          <NavIndicators count={panelsCount} activeIndex={viewState().currentPanel} setIndicator={onSetSection} />
        )}
      </div>
    </div>
  );
};

// Indicator component for section navigation
const NavIndicators = (props) => {
  const indicatorHtml = Array.from({ length: props.count }, (_, i) => {
    const indicatorstyles = [styles.indicator, i === props.activeIndex - 1 && styles.active];
    return (
      <div class={indicatorstyles.join(' ')} onClick={() => props.setIndicator(i + 1)}>
        &#11044;
      </div>
    );
  });

  return <div class={styles.navIndicators}>{indicatorHtml}</div>;
};

// Component for individual full-page panels
const FullPagePanel = (_props) => {
  const [props, props] = splitProps(_props, ['bgColor']);
  return (
    <div class={styles.fullPanel} style={{ 'background-color': props.bgColor }}>
      <div class={styles.panelContent}>{props.children}</div>
    </div>
  );
};

export { FullPageContainer, FullPagePanel };
