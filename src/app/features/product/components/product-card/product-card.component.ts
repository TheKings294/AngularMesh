import {Component, Input} from '@angular/core';
import {Product} from '../../../../core/model/product/domain-product';
import {CurrencyPipe, NgClass} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ProductService} from '../../../../core/services/http/product/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    NgClass
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) public product!: Product;

  constructor(
    private router: Router,
  ) {}

  public routerNavigate(id: number): void {
    this.router.navigate([`products/${id}`]);
  }
}
