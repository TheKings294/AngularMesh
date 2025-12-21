import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {DeleteProductResponseDTO, ProductResponse, ProductsResponseDTO} from '../../../model/product/dto-product';
import {DeletedProduct, Product, Products} from '../../../model/product/domain-product';
import {mapProduct, mapProductToDTO} from '../../../mappers/mapper-product';
import {mapReview} from '../../../mappers/mapper-review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllProduct(): Observable<Products> {
    return this.http.get<ProductsResponseDTO>(`/products`).pipe(
      map(response => ({
        ...response,
        products: response.products.map(mapProduct),
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
        reviews: response.reviews.map(mapReview),
      }))
    );
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<ProductResponse>(`/products/add`,
      mapProductToDTO(product),
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
        reviews: response.reviews.map(mapReview),
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
        reviews: response.reviews.map(mapReview),
      }))
    )
  }

  public deleteProduct(id: number): Observable<DeletedProduct> {
    return this.http.delete<DeleteProductResponseDTO>(`/products/${id}`).pipe(
      map(response => ({
        ...response,
        meta: {
          ...response.meta,
          createdAt: new Date(response.meta.createdAt),
          updatedAt: new Date(response.meta.updatedAt),
        },
        reviews: response.reviews.map(mapReview),
        deletedOn: new Date(response.deletedOn)
      }))
    )
  }
}
