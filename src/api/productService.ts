import {Product} from '../shared/types/product.types';
import api from './api';

/**
 * Retrieves a product using its code identifier.
 * The codeIdentifier can either be a QR code value or the product id.
 * @param codeIdentifier - The unique code identifier (QR code or product id) of the product.
 * @returns The product data.
 */
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

/**
 * Retrieves a list of products based on the given filters.
 * @param params - The filters for retrieving products.
 * @param params.blocked - Whether to filter by blocked status.
 * @param params.category - The product category.
 * @param params.page - The page number for pagination.
 * @param params.limit - The number of products per page.
 * @param params.query - A search query string.
 * @returns The list of products.
 */
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

// productService.ts (example path)

/**
 * Blocks one or more units of a product.
 */
export const blockProductUnit = async (
  identifier: string,
  quantity: number,
): Promise<Product> => {
  const response = await api.post(`products/${identifier}/block`, {
    quantity,
  });
  return response.data;
};

/**
 * Releases one or more blocked units of a product.
 */
export const releaseProductUnit = async (
  identifier: string,
  quantity: number,
): Promise<Product> => {
  const response = await api.post(`products/${identifier}/release`, {
    quantity,
  });
  return response.data;
};

/**
 * Declares the sale of one or more units of a product.
 */
export const declareSale = async (
  identifier: string,
  quantity: number,
  useReservation: boolean,
): Promise<Product> => {
  const response = await api.post(`products/${identifier}/declare-sale`, {
    quantity,
    useReservation,
  });
  return response.data;
};
