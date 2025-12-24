import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../core/model/product/domain-product';
import {ProductService} from '../../../../core/services/http/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    NgClass,
    DatePipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  public product!: Product;
  @Input({ required: true }) public id!: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route : ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.productService.getProductById(this.id).subscribe(product => {
        this.product = product;
      })
    })
  }

  public editProduct(id: number) {
    this.router.navigate([`products/update/${id}`]);
  }

  public deleteProduct(id: number) {
    if (confirm("Are you sure to delete this product?")) {
      this.productService.deleteProduct(id).subscribe({
        next: (data) => {
          if (data.isDeleted) {
            this.router.navigate([`products/`]);
          }
        }
      })
    }
  }
}
