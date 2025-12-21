import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  DeleteProductResponse,
  DeleteProductResponseDTO,
  Product,
  ProductResponse,
  ProductsResponse,
  ProductsResponseDTO
} from '../../../model/product/product';
import {map, Observable} from 'rxjs';
import {Review, ReviewResponse} from '../../../model/review/review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllProduct(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponseDTO>(`/products`).pipe(
      map(response => ({
        ...response,
        products: response.products.map(this.mapProduct),
      }))
    );
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<ProductResponse>(`/products/${id}`).pipe(
      map(response => ({
        ...response,
        meta: {
          ...response.meta,
          createdAt: new Date(response.meta.createdAt),
          updatedAt: new Date(response.meta.createdAt)
        },
        reviews: response.reviews.map(this.mapReview),
      }))
    );
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<ProductResponse>(`/products/add`,
      this.mapProductToDTO(product),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(
      map(response => ({
        ...response,
        meta: {
          ...response.meta,
          createdAt: new Date(response.meta.createdAt),
          updatedAt: new Date(response.meta.createdAt)
        },
        reviews: response.reviews.map(this.mapReview),
      }))
    )
  }

  public updateProduct(product: Partial<Product>): Observable<Product> {
    return this.http.put<ProductResponse>(`/products/${product.id}`,
      product,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(
      map(response => ({
        ...response,
        meta: {
          ...response.meta,
          createdAt: new Date(response.meta.createdAt),
          updatedAt: new Date(response.meta.createdAt)
        },
        reviews: response.reviews.map(this.mapReview),
      }))
    )
  }

  public deleteProduct(id: number): Observable<DeleteProductResponse> {
    return this.http.delete<DeleteProductResponseDTO>(`/products/${id}`).pipe(
      map(response => ({
        ...response,
        meta: {
          ...response.meta,
          createdAt: new Date(response.meta.createdAt),
          updatedAt: new Date(response.meta.updatedAt),
        },
        reviews: response.reviews.map(this.mapReview),
        deletedOn: new Date(response.deletedOn)
      }))
    )
  }

  private mapReview = (review: ReviewResponse) => ({
    ...review,
    date: new Date(review.date),
  });

  private mapProduct = (product: ProductResponse) => ({
    ...product,
    meta: {
      ...product.meta,
      createdAt: new Date(product.meta.createdAt),
      updatedAt: new Date(product.meta.updatedAt),
    },
    reviews: product.reviews.map(this.mapReview),
  });

  private mapReviewToDTO = (review: Review): ReviewResponse => ({
    ...review,
    date: this.dateToString(review.date),
  });

  private mapProductToDTO = (product: Product): ProductResponse => ({
    ...product,
    meta: {
      ...product.meta,
      createdAt: this.dateToString(product.meta.createdAt),
      updatedAt: this.dateToString(product.meta.updatedAt),
    },
    reviews: product.reviews.map(this.mapReviewToDTO),
  });

  private dateToString = (value: Date | string): string =>
    value instanceof Date ? value.toISOString() : value;

}
