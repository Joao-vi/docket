import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../common/lib/react-query';
import { useAppServices } from '../../common/services/app-services';
import { INotePayload } from '../service/notes-service/i-notes-service';

export const useEditNote = () => {
  const { notesService } = useAppServices();

  const { mutate } = useMutation({
    mutationFn: (payload: INotePayload) => notesService.edit(payload),
    onSettled: () => {
      queryClient.invalidateQueries(['NOTES']);
    },
  });

  return mutate;
};
