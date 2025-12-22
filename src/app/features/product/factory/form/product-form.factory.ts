import {FormBuilder, Validators } from '@angular/forms';
import {Product} from '../../../../core/model/product/domain-product';

export const createProductForm = (
  fb: FormBuilder,
  product?: Product
) => fb.nonNullable.group({
  title: fb.control(product?.title ?? '', Validators.required),
  description: fb.control(product?.description ?? ''),
  category: fb.control(product?.category ?? ''),
  price: fb.control(product?.price ?? 0, Validators.required),
  discountPercentage: fb.control(product?.discountPercentage ?? 0),
  stock: fb.control(product?.stock ?? 0),
  tags: fb.control(product?.tags ?? []),
  brand: fb.control(product?.brand ?? ''),
  sku: fb.control(product?.sku ?? ''),
  weight: fb.control(product?.weight ?? 0),

  dimensions: fb.group({
    width: fb.control(product?.dimensions.width ?? 0),
    height: fb.control(product?.dimensions.height ?? 0),
    depth: fb.control(product?.dimensions.depth ?? 0),
  }),

  warrantyInformation: fb.control(product?.warrantyInformation ?? ''),
  shippingInformation: fb.control(product?.shippingInformation ?? ''),
  availabilityStatus: fb.control(product?.availabilityStatus ?? ''),

  returnPolicy: fb.control(product?.returnPolicy ?? ''),
  minimumOrderQuantity: fb.control(product?.minimumOrderQuantity ?? 1),

  thumbnail: fb.control(product?.thumbnail ?? ''),
  images: fb.control(product?.images ?? []),
});
