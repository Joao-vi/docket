import { NoteList } from '../note-list';

export function NotesGrid() {
  return (
    <article className="relative mt-20">
      <h1 className="leading-[0.6] font-semibold tracking-[0.01px] text-6xl">Notes</h1>

      <NoteList />
    </article>
  );
}
