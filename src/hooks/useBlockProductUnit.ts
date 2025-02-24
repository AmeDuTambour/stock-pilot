import {useMutation, useQueryClient} from '@tanstack/react-query';
import {blockProductUnit} from '../api/productService';

export const useBlockProductUnit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      identifier,
      quantity,
    }: {
      identifier: string;
      quantity: number;
    }) => blockProductUnit(identifier, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['products']});

      queryClient.invalidateQueries({queryKey: ['product'], exact: false});
    },
  });
};
