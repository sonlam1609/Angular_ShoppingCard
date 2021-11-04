import { CartItems } from './../shared/product';
import { Component, OnInit } from '@angular/core';
import { product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { ShoppingCardService } from '../shared/shopping-card.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css'],
})
export class ProductDashboardComponent implements OnInit {
  products!: product[];

  constructor(
    private productService: ProductService,
    private shoppingCardService: ShoppingCardService
  ) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res.body as product[];
    });
  }

  addCard(product: product) {
    this.shoppingCardService.addToCart(product);
    console.log(this.shoppingCardService.getCartItems());
    alert('Đã thêm sản phẩm' + product.productName + ' vào giỏ hàng');
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((res) => {
      console.log(res);
      this.getProducts();
    });
  }
}
