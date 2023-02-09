import { createContext, useContext, useMemo, useState } from 'react';

type ISearchNotesFormContext = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchNotesFormContext = createContext<ISearchNotesFormContext | undefined>(undefined);

interface ISearchNotesFormProvider {
  children: JSX.Element[];
}

const SearchNotesFormProvider = ({ children }: ISearchNotesFormProvider) => {
  const [query, setQuery] = useState('');

  const value = useMemo(
    () => ({
      query,
      setQuery,
    }),
    [query]
  );

  return (
    <SearchNotesFormContext.Provider value={value}>{children}</SearchNotesFormContext.Provider>
  );
};

const useSearchNotesContext = () => {
  const ctx = useContext(SearchNotesFormContext);

  if (!ctx)
    throw new Error('You must use useSearchNotesContext inside <SearchNotesFormProvider/> ');

  return ctx;
};

export { SearchNotesFormProvider, useSearchNotesContext };
