import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../core/model/product/domain-product';
import {ProductService} from '../../../../core/services/http/product/product.service';
import {Router} from '@angular/router';
import {ProductCardComponent} from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.getAllProduct().subscribe(products => {
      this.products = products.products
    })
  }

  public showMore(): void {
    this.productService.getAllProduct(this.products.length).subscribe(products => {
      products.products.forEach(product => {
        this.products.push(product);
      })
    })
  }
}
