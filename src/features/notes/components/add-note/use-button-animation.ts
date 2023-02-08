import anime from 'animejs';
import { useEffect, useState } from 'react';

import { COLORS } from '../../constants/colors';

export const useButtonAnimation = () => {
  const [open, setOpen] = useState<anime.AnimeTimelineInstance>();
  const [close, setClose] = useState<anime.AnimeTimelineInstance>();

  useEffect(() => {
    setClose(createCloseAnimation());
    setOpen(createOpenAnimation());
  }, []);

  return {
    runOpenAnimation: open?.play,
    runCloseAnimation: close?.play,
  };
};

const createCloseAnimation = () => {
  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    autoplay: false,
  });

  timeline
    .add({
      targets: '#add-note',
      translateY: 0,
      rotate: [315, 0],
      duration: 500,
    })
    .add({
      targets: `#${COLORS[1].id}`,
      delay: anime.stagger(100),
      duration: 300,
      translateY: (_: any, index: number) => ['0rem', `-${3.3 * index + 3}rem`],
      scaleY: [1, 2, 1],
      opacity: [1, 0],
    })
    .add(
      {
        targets: `#${COLORS[0].id}`,
        translateY: ['0rem', '-5rem'],
        opacity: [1, 0],
        scaleY: [1, 2, 1],
        duration: 400,
      },
      '-=150'
    )
    .add(
      {
        targets: '#add-note',
        translateY: [0, -5, 0],
        scaleY: [1, 1.2, 1],
        duration: 400,
      },
      '-=350'
    );

  return timeline;
};

const createOpenAnimation = () => {
  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    autoplay: false,
  });

  timeline
    .add({
      targets: '#add-note',
      rotate: [0, 315],
      scale: [1, 0.85, 1],
      translateY: [0, -16, 0],
      duration: 500,
    })
    .add(
      {
        targets: `#${COLORS[0].id}`,
        translateY: ['-5rem', '0rem'],
        opacity: [0, 1],
        scaleY: [1, 1.4, 1],
        duration: 400,
      },
      '-=300'
    )
    .add({
      targets: `#${COLORS[1].id}`,
      delay: anime.stagger(250),
      duration: 250,
      translateY: ['-3.3rem', '0rem'],
      scaleY: [1, 1.8, 1],
      opacity: [0, 1],
    });

  return timeline;
};
