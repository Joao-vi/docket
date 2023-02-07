import { AddNote } from '../add-note';

export function SideBar() {
  return (
    <section className="p-8 flex flex-col items-center border-r-2 border-gray-100">
      <h1 className="font-semibold text-2xl">Notes</h1>

      <AddNote />
    </section>
  );
}
