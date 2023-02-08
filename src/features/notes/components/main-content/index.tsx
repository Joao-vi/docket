import { NotesGrid } from '../notes-grid';
import { SearchNotesForm } from '../search-notes-form';

export function MainContent() {
  return (
    <section className="p-8 flex-1">
      <SearchNotesForm />

      <NotesGrid />
    </section>
  );
}
