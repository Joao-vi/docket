import { MagnifyingGlass } from 'phosphor-react';
import { Input } from '../../../common/components/input';
import { useSearchNotesContext } from '../../context/search-notes-context';

export function SearchNotesForm() {
  const { setQuery } = useSearchNotesContext();

  return (
    <form className="max-w-sm">
      <Input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title"
        icon={<MagnifyingGlass className="text-xl text-gray-400" weight="bold" />}
      />
    </form>
  );
}
