import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useAppServices } from '../../common/services/app-services';
import { useSearchNotesContext } from '../context/search-notes-context';

export const useFetchNotes = () => {
  const { query } = useSearchNotesContext();
  const { notesService } = useAppServices();

  const { data, isLoading, isFetching, isError } = useQuery(['NOTES'], {
    queryFn: () => notesService.fetch(),
  });

  const filterData = useMemo(
    () => data?.filter((d) => d.title.toLowerCase().includes(query.toLowerCase())),
    [data, query]
  );

  const pinned = filterData?.filter((d) => d.isPinned);
  const others = filterData?.filter((d) => !d.isPinned);

  return {
    data: { pinned, others },
    isLoading,
    isFetching,
    isError,
    queryInput: query,
  };
};
