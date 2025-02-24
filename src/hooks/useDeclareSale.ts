import {useMutation, useQueryClient} from '@tanstack/react-query';
import {declareSale} from '../api/productService';

/**
 * Hook to declare the sale of one or more product units.
 * @returns A mutation object for declaring product sale.
 */
export const useDeclareSale = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      identifier,
      quantity,
      useReservation,
    }: {
      identifier: string;
      quantity: number;
      useReservation: boolean;
    }) => declareSale(identifier, quantity, useReservation),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['products']});
      queryClient.invalidateQueries({queryKey: ['product']});
    },
  });
};
