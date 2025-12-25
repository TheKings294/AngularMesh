export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductMeta<TDate> {
  createdAt: TDate;
  updatedAt: TDate;
  barcode: string;
  qrCode: string;
}

export interface BaseProduct<TReview, TDate> {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: TReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta<TDate>;
  thumbnail: string;
  images: string[];
}
