import {Review, ReviewResponse} from '../review/review';

export interface Product {
  "id": number,
  "title": string,
  "description": string,
  "category": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "tags": string[],
  "brand": string,
  "sku": string,
  "weight": number,
  "dimensions": {
    "width": number,
    "height": number,
    "depth": number,
  },
  "warrantyInformation": string,
  "shippingInformation": string,
  "availabilityStatus": string,
  "reviews": Review[],
  "returnPolicy": string,
  "minimumOrderQuantity": number,
  "meta": {
    "createdAt": Date,
    "updatedAt": Date,
    "barcode": string,
    "qrCode": string
  },
  "thumbnail": string,
  "images": string[]
}

// Date in string for the response
export interface ProductResponse {
  "id": number,
  "title": string,
  "description": string,
  "category": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "tags": string[],
  "brand": string,
  "sku": string,
  "weight": number,
  "dimensions": {
    "width": number,
    "height": number,
    "depth": number,
  },
  "warrantyInformation": string,
  "shippingInformation": string,
  "availabilityStatus": string,
  "reviews": ReviewResponse[],
  "returnPolicy": string,
  "minimumOrderQuantity": number,
  "meta": {
    "createdAt": string,
    "updatedAt": string,
    "barcode": string,
    "qrCode": string
  },
  "thumbnail": string,
  "images": string[]
}

export interface ProductsResponseDTO {
  products: ProductResponse[];
  total: number,
  skip: number,
  limit: number,
}

export interface ProductsResponse {
  products: Product[];
  total: number,
  skip: number,
  limit: number,
}

export interface DeleteProductResponseDTO {
  "id": number,
  "title": string,
  "description": string,
  "category": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "tags": string[],
  "brand": string,
  "sku": string,
  "weight": number,
  "dimensions": {
    "width": number,
    "height": number,
    "depth": number,
  },
  "warrantyInformation": string,
  "shippingInformation": string,
  "availabilityStatus": string,
  "reviews": ReviewResponse[],
  "returnPolicy": string,
  "minimumOrderQuantity": number,
  "meta": {
    "createdAt": string,
    "updatedAt": string,
    "barcode": string,
    "qrCode": string
  },
  "thumbnail": string,
  "images": string[]
  isDeleted: boolean,
  deletedOn: string,
}

export interface DeleteProductResponse {
  "id": number,
  "title": string,
  "description": string,
  "category": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "tags": string[],
  "brand": string,
  "sku": string,
  "weight": number,
  "dimensions": {
    "width": number,
    "height": number,
    "depth": number,
  },
  "warrantyInformation": string,
  "shippingInformation": string,
  "availabilityStatus": string,
  "reviews": Review[],
  "returnPolicy": string,
  "minimumOrderQuantity": number,
  "meta": {
    "createdAt": Date,
    "updatedAt": Date,
    "barcode": string,
    "qrCode": string
  },
  "thumbnail": string,
  "images": string[]
  isDeleted: boolean,
  deletedOn: Date,
}
