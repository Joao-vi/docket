import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../common/lib/react-query';
import { useAppServices } from '../../common/services/app-services';

export const useDeleteNote = () => {
  const { notesService } = useAppServices();

  const { mutate } = useMutation({
    mutationFn: (id: string) => notesService.remove(id),
    onSettled: () => {
      queryClient.invalidateQueries(['NOTES']);
    },
  });

  return mutate;
};
