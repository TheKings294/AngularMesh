import {BaseProduct} from './types-product';
import {ReviewResponse} from '../review/dto-review';

export type ProductResponse = BaseProduct<ReviewResponse, string>


export interface ProductsResponseDTO {
  products: ProductResponse[];
  total: number;
  skip: number;
  limit: number;
}

export type DeleteProductResponseDTO =
  ProductResponse & {
  isDeleted: boolean;
  deletedOn: string;
}
