import anime from 'animejs';
import { useState, useEffect, useRef } from 'react';

export const useAnimation = () => {
  const optionsRef = useRef<any>();

  const [closeAnimation, setCloseAnimation] = useState<anime.AnimeTimelineInstance>();
  const [openAnimation, setOpenAnimation] = useState<anime.AnimeTimelineInstance>();

  useEffect(() => {
    setCloseAnimation(createCloseAnimation(optionsRef));
    setOpenAnimation(createOpenAnimation(optionsRef));
  }, []);

  return {
    runCloseAnimation: closeAnimation?.play,
    runOpenAnimation: openAnimation?.play,
    optionsRef,
  };
};

const createCloseAnimation = (ref: any) => {
  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    autoplay: false,
  });

  timeline.add({
    targets: ref.current,
    duration: 500,
    maxHeight: ['500px', '0px'],
    opacity: {
      value: [1, 0],
    },
  });

  return timeline;
};

const createOpenAnimation = (ref: any) => {
  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    autoplay: false,
  });

  timeline
    .add({
      targets: ref.current,
      duration: 500,
      maxHeight: ['0px', '500px'],
      opacity: {
        value: [0, 1],
        duration: 250,
      },
    })
    .add(
      {
        targets: ref.current?.children,
        duration: 300,
        delay: anime.stagger(100),
        scale: [0.9, 1],
        translateY: [5, 0],
        opacity: [0, 1],
      },
      '-=400'
    );

  return timeline;
};
