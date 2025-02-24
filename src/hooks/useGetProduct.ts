import {useQuery, useQueryClient} from '@tanstack/react-query';
import {getProductByCodeIdentifier} from '../api/productService';
import type {Product} from '../shared/types/product.types';
import {useEffect} from 'react';

const useGetProduct = (codeIdentifier: string) => {
  const queryClient = useQueryClient();

  const queryResult = useQuery<Product, Error>({
    queryKey: ['product', codeIdentifier] as const,
    queryFn: () => getProductByCodeIdentifier(codeIdentifier),
    enabled: !!codeIdentifier,
  });

  useEffect(() => {
    if (queryResult.data) {
      queryClient.setQueryData(
        ['product', queryResult.data.id],
        queryResult.data,
      );
    }
  }, [queryResult.data, codeIdentifier, queryClient]);

  return queryResult;
};

export default useGetProduct;
