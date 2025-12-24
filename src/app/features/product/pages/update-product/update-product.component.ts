import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../../../core/services/http/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {createProductForm} from '../../factory/form/product-form.factory';
import {Product} from '../../../../core/model/product/domain-product';
import {HttpResponse} from '@angular/common/http';
import {ProductFormComponent} from '../../components/product-form/product-form.component';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    ProductFormComponent
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
  public form : FormGroup;
  public errorMessage : string = "";
  public isSuccess : boolean = false;
  public product !: Product;
  @Input({ required: true }) public id!: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = createProductForm(this.fb)
  }

  public submit() {
    if (this.form.invalid) return;

    const product: Product = this.form.getRawValue();
    this.productService.updateProduct(product).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          this.isSuccess = true
        }
      },
      error: err => this.errorMessage = err.message
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.productService.getProductById(this.id).subscribe(product => {
        this.product = product;
        this.form = createProductForm(this.fb, this.product)
      })
    })
  }
}
