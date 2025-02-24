import {useMutation, useQueryClient} from '@tanstack/react-query';
import {releaseProductUnit} from '../api/productService';

/**
 * Hook to release one or more blocked product units.
 * @returns A mutation object for releasing product units.
 */
export const useReleaseProductUnit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      identifier,
      quantity,
    }: {
      identifier: string;
      quantity: number;
    }) => releaseProductUnit(identifier, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['products']});
      queryClient.invalidateQueries({queryKey: ['product']});
    },
  });
};
