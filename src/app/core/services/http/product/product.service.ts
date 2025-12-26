import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {DeleteProductResponseDTO, ProductResponse, ProductsResponseDTO} from '../../../model/product/dto-product';
import {DeletedProduct, Product, Products} from '../../../model/product/domain-product';
import {mapProduct} from '../../../mappers/mapper-product';
import {mapReview} from '../../../mappers/mapper-review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllProduct(skip?: number): Observable<Products> {
    return this.http.get<ProductsResponseDTO>(`/products${skip ? `?skip=${skip}` : ""}`).pipe(
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

  public createProduct(product: Product): Observable<HttpResponse<Partial<ProductResponse>>> {
    return this.http.post<ProductResponse>(`/products/add`,
      product,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        observe: "response"
      }
    )
  }

  public updateProduct(product: Partial<Product>, id: number): Observable<HttpResponse<Partial<ProductResponse>>> {
    return this.http.put<ProductResponse>(`/products/${id}`,
      product,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        observe: "response"
      }
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
