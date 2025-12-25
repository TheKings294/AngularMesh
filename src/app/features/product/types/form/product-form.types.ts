import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type ReviewForm = FormGroup<{
  rating: FormControl<number>;
  comment: FormControl<string>;
  date: FormControl<Date>;
  reviewerName: FormControl<string>;
  reviewerEmail: FormControl<string>;
}>;

export type ProductFormTypes = FormGroup<{
  title: FormControl<string>;
  description: FormControl<string>;
  category: FormControl<string>;
  price: FormControl<number>;
  discountPercentage: FormControl<number>;
  stock: FormControl<number>;
  tags: FormControl<string[]>;
  brand: FormControl<string>;
  sku: FormControl<string>;
  weight: FormControl<number>;
  dimensions: FormGroup<{
    width: FormControl<number>;
    height: FormControl<number>;
    depth: FormControl<number>;
  }>;
  warrantyInformation: FormControl<string>;
  shippingInformation: FormControl<string>;
  availabilityStatus: FormControl<string>;
  reviews: FormArray<ReviewForm>;
  returnPolicy: FormControl<string>;
  minimumOrderQuantity: FormControl<number>;
  meta: FormGroup<{
    createdAt: FormControl<Date>;
    updatedAt: FormControl<Date>;
  }>;
  thumbnail: FormControl<string>;
  images: FormControl<string[]>;
}>;
