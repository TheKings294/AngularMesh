import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../../../core/services/http/product/product.service';
import {Product} from '../../../../core/model/product/domain-product';
import { createProductForm } from '../../factory/form/product-form.factory';
import {ProductFormComponent} from '../../components/product-form/product-form.component';
import {HttpResponse} from '@angular/common/http';
import {ToastComponent} from '../../../shared/components/toast/toast.component';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    ProductFormComponent,
    ToastComponent
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})

export class NewProductComponent {
  public form : FormGroup;
  public errorMessage : string = "";
  public isSuccess : boolean = false;
  @ViewChild('toast') toast!: ToastComponent;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
  ) {
    this.form = createProductForm(this.fb)
  }

  public submit() {
    if (this.form.invalid) return;

    const product: Product = this.form.getRawValue();
    this.productService.createProduct(product).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          this.isSuccess = true
          this.toast.show('Product successfully created!', 'success');
        }
      },
      error: err => {
        this.errorMessage = err.message
        this.toast.show(this.errorMessage, 'error')
      }
    })
  }
}
