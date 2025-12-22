import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../core/model/product/domain-product';
import {ProductService} from '../../../../core/services/http/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
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

        console.log(this.product);
      })
    })
  }
}
