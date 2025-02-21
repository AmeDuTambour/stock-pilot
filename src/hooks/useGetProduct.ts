import {useQuery} from '@tanstack/react-query';
import {getProductByCodeIdentifier} from '../api/productService';

const useGetProduct = (codeIdentifier: string) => {
  return useQuery({
    queryKey: ['product', codeIdentifier],
    queryFn: () => getProductByCodeIdentifier(codeIdentifier),
    enabled: !!codeIdentifier,
  });
};

export default useGetProduct;
