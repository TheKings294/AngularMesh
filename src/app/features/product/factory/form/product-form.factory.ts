import {FormBuilder, Validators } from '@angular/forms';
import {Product} from '../../../../core/model/product/domain-product';

export const createProductForm = (
  fb: FormBuilder,
  product?: Product
) => fb.nonNullable.group({
  title: fb.control(
    product?.title ?? '',
    [Validators.required, Validators.minLength(3)]
  ),
  description: fb.control(
    product?.description ?? '',
    Validators.maxLength(500)
  ),
  category: fb.control(product?.category ?? '', Validators.required),
  price: fb.control(
    product?.price ?? 0,
    [Validators.required, Validators.min(0)]
  ),
  discountPercentage: fb.control(
    product?.discountPercentage ?? 0,
    [Validators.min(0), Validators.max(100)]
  ),
  stock: fb.control(product?.stock ?? 0, Validators.min(0)),
  tags: fb.control(product?.tags ?? []),
  brand: fb.control(product?.brand ?? '', Validators.required),
  sku: fb.control(product?.sku ?? ''),
  weight: fb.control(product?.weight ?? 0, Validators.min(0)),

  dimensions: fb.group({
    width: fb.control(product?.dimensions.width ?? 0, Validators.min(0)),
    height: fb.control(product?.dimensions.height ?? 0, Validators.min(0)),
    depth: fb.control(product?.dimensions.depth ?? 0, Validators.min(0)),
  }),

  warrantyInformation: fb.control(product?.warrantyInformation ?? ''),
  shippingInformation: fb.control(product?.shippingInformation ?? ''),
  availabilityStatus: fb.control(product?.availabilityStatus ?? '', Validators.required),

  returnPolicy: fb.control(product?.returnPolicy ?? ''),
  minimumOrderQuantity: fb.control(product?.minimumOrderQuantity ?? 1, Validators.min(1)),

  thumbnail: fb.control(product?.thumbnail ?? '', Validators.required),
  images: fb.control(product?.images ?? []),
});
