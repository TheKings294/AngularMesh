import {Product, Products} from '../model/product/domain-product';
import {mapReview, mapReviewToDTO} from './mapper-review';
import {ProductResponse, ProductsResponseDTO} from '../model/product/dto-product';
import {dateToString} from './mapper-date';

export const mapProduct = (dto: ProductResponse): Product => ({
  ...dto,
  meta: {
    ...dto.meta,
    createdAt: new Date(dto.meta.createdAt),
    updatedAt: new Date(dto.meta.updatedAt),
  },
  reviews: dto.reviews.map(mapReview),
});

export const mapProducts = (dto: ProductsResponseDTO): Products => ({
  ...dto,
  products: dto.products.map(mapProduct),
});

export const mapProductToDTO = (product: Product): ProductResponse => ({
  ...product,
  meta: {
    ...product.meta,
    createdAt: dateToString(product.meta.createdAt),
    updatedAt: dateToString(product.meta.updatedAt),
  },
  reviews: product.reviews.map(mapReviewToDTO),
});
