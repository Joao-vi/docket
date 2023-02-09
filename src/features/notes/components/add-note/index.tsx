import { Plus } from 'phosphor-react';
import { useReducer } from 'react';

import { Button } from '../../../common/components/button';
import { useButtonAnimation } from './use-button-animation';
import { ColorsList } from '../colors-list';

export function AddNote() {
  const [isOpen, toggle] = useReducer((state) => !state, false);
  const { runCloseAnimation, runOpenAnimation } = useButtonAnimation();

  const handleClick = () => {
    if (isOpen) {
      runCloseAnimation?.();
    } else {
      runOpenAnimation?.();
    }

    toggle();
  };

  return (
    <article
      className="mt-5 sm:mt-20 flex flex-col gap-8 items-center"
      style={{ filter: 'url(#gooey)' }}
    >
      <Button
        onClick={handleClick}
        id="add-note"
        variants={{ type: 'icon' }}
        className="z-[1] w-fit"
      >
        <Plus className="text-2xl" weight="bold" />
      </Button>

      <ColorsList />
    </article>
  );
}
