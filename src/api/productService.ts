import api from './api';

export const getProductByCodeIdentifier = async (codeIdentifier: string) => {
  const response = await api.get(`products/${codeIdentifier}`);
  return response.data;
};

type GetProductsParams = {
  blocked?: boolean;
  category?: string;
  page?: number;
  limit?: number;
  query?: string;
};

export const getProducts = async ({
  blocked = false,
  category,
  page = 1,
  limit = 10,
  query = '',
}: GetProductsParams) => {
  const response = await api.get('products', {
    params: {blocked, category, page, limit, query},
  });
  return response.data;
};
