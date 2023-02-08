import { useQuery } from '@tanstack/react-query';

import { useAppServices } from '../../common/services/app-services';

export const useFetchNotes = () => {
  const { notesService } = useAppServices();

  const query = useQuery(['NOTES'], {
    queryFn: () => notesService.fetch(),
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
  };
};
