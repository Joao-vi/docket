import { NoteCard } from '../note-card';

export function NotesGrid() {
  return (
    <article className="mt-20">
      <h1 className="leading-[0.6] font-semibold tracking-[0.01px] text-6xl">Notes</h1>

      <ul className="mt-14 flex flex-wrap gap-6">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </ul>
    </article>
  );
}
