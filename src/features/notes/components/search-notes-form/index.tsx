import { MagnifyingGlass } from 'phosphor-react';
import { Input } from '../../../common/components/input';

export function SearchNotesForm() {
  return (
    <form className="max-w-sm">
      <Input
        placeholder="Search"
        icon={<MagnifyingGlass className="text-xl text-gray-400" weight="bold" />}
      />
    </form>
  );
}
