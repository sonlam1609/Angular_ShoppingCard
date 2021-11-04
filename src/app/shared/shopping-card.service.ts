import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CartItems, product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCardService {
  private apiUrl = environment.apiUrl + 'CheckOut';
  private static cartItems: CartItems[] = [];
  constructor(private httpClient: HttpClient) {}

  postListCart(value: any) {
    const option = {
      headers: new HttpHeaders({}),
      observe: 'response' as const,
    };
    return this.httpClient.post(this.apiUrl, value, option);
  }

  addToCart(product: product) {
    var itemExists = this.getCartItems().find(
      (item) => item.product.id === product.id
    );
    if (itemExists == undefined) {
      ShoppingCardService.cartItems.push({ product: product, quantity: 1 });
    } else {
      itemExists.quantity++;
    }
  }

  getCartItems() {
    return ShoppingCardService.cartItems;
  }

  setNullCartItems() {
    ShoppingCardService.cartItems = [];
  }

  getTotal() {
    let total = 0;
    this.getCartItems().forEach((item) => {
      total +=
        (item.product.price -
          (item.product.price * item.product.promotionPrice) / 100) *
        item.quantity;
    });
    return total;
  }

  removeCartItem(item: CartItems) {
    const index = this.getCartItems().findIndex(
      (x) => x.product.id === item.product.id
    );
    this.getCartItems().splice(index, 1);
  }

  updateQuantity(quantity: number, index: number) {
    this.getCartItems()[index].quantity = quantity;
  }
}
