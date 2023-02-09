import { DotsThreeOutline, PencilSimple, Trash, PushPin } from 'phosphor-react';
import { useReducer } from 'react';

import { Button } from '../../../common/components/button';
import { useAnimation } from './use-animation';

export function NoteOptions() {
  const [isOpen, toggle] = useReducer((state) => !state, false);

  const { runCloseAnimation, runOpenAnimation, optionsRef } = useAnimation();

  const handleToggle = () => {
    if (isOpen) {
      runCloseAnimation?.();
    } else {
      runOpenAnimation?.();
    }

    toggle();
  };

  return (
    <div className="relative flex justify-center">
      <Button onClick={handleToggle} variants={{ type: 'icon' }}>
        <DotsThreeOutline className="text-xl" />
      </Button>

      <ul
        ref={optionsRef}
        className="overflow-hidden absolute bottom-0 mb-[3.5rem] flex flex-col gap-3 bg-zinc-900 px-2 py-4 rounded-2xl"
      >
        <Button id="option" variants={{ type: 'icon' }} className="bg-zinc-800">
          <Trash className="text-xl" />
        </Button>

        <Button id="option" variants={{ type: 'icon' }} className="bg-zinc-800">
          <PushPin className="text-xl" />
        </Button>
      </ul>
    </div>
  );
}
