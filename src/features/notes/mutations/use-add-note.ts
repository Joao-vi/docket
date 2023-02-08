import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../common/lib/react-query';
import { useAppServices } from '../../common/services/app-services';

export const useAddNote = () => {
  const { notesService } = useAppServices();

  const { mutate } = useMutation({
    mutationFn: (color: string) => notesService.add(color),
    onMutate: () => {},
    onError: () => {},
    onSettled: () => {
      queryClient.invalidateQueries(['NOTES']);
    },
  });

  return mutate;
};
