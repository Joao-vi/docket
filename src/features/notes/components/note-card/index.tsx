import { NoteOptions } from '../note-options';

export function NoteCard() {
  return (
    <li className="flex-1 min-h-[20rem] min-w-[16rem] max-w-[20rem] flex flex-col justify-between px-6 py-7 rounded-3xl bg-amber-400 font-medium leading-[1.4]">
      <div>
        <p>The beginning of screenless design:</p>
        <p>UI jobs to be taken over by Solution Architect</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-normal">May 21, 2020</span>

        <NoteOptions />
      </div>
    </li>
  );
}
