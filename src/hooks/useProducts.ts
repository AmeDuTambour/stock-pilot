import {useQuery} from '@tanstack/react-query';
import {getProducts} from '../api/productService';

type UseProductsParams = {
  blocked?: boolean;
  category?: string;
  page?: number;
  limit?: number;
  query?: string;
};

export const useProducts = ({
  blocked,
  category,
  page,
  limit,
  query,
}: UseProductsParams) => {
  return useQuery({
    queryKey: ['products', blocked, category, page, limit, query],
    queryFn: () => getProducts({blocked, category, page, limit, query}),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
  });
};
