import {BaseProduct} from './types-product';
import {Review} from '../review/domain-review';

export type Product = BaseProduct<Review, Date>;

export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type DeletedProduct = Product & {
  isDeleted: boolean;
  deletedOn: Date;
};
