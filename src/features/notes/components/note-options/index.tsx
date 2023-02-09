import { DotsThreeOutline, PencilSimple, Trash, PushPin } from 'phosphor-react';
import { Children, useReducer } from 'react';

import { Button } from '../../../common/components/button';
import { useAnimation } from './use-animation';

interface INoteOptions {
  children: JSX.Element[];
}

export function NoteOptions({ children }: INoteOptions) {
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
        {children}
      </ul>
    </div>
  );
}
