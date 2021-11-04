import { getLocaleFirstDayOfWeek } from '@angular/common';
import { CartItems } from './../shared/product';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingCardService } from '../shared/shopping-card.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
})
export class ShoppingCardComponent implements OnInit {
  tag = true;
  submitForm: FormGroup;

  total = 0;

  listCard: CartItems[] = [];

  constructor(
    private fb: FormBuilder,
    private shoppingCardService: ShoppingCardService
  ) {
    this.getShoppingCart();

    this.submitForm = this.fb.group({
      userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      products: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  getShoppingCart() {
    this.tag = true;
    this.listCard = this.shoppingCardService.getCartItems();
    this.total = this.shoppingCardService.getTotal();
  }

  removeCartItem(item: CartItems) {
    this.shoppingCardService.removeCartItem(item);
    this.total = this.shoppingCardService.getTotal();
  }

  changeQuantity(value: any, index: number){
    this.shoppingCardService.updateQuantity(value.value, index);
    this.getShoppingCart();
  }

  submitListCart(){
    //change quanlity list product
    let products = this.submitForm.get('products') as FormArray;
    products?.reset();
    this.listCard.forEach(item =>{
      item.product.quantity = item.quantity;
      products.push(new FormControl(item.product));
    })

    //action
    this.shoppingCardService.postListCart(this.submitForm.value).subscribe(res =>{
      console.log(res);
      if(res.status == 200){
        this.tag = !this.tag;
        this.shoppingCardService.setNullCartItems();
        alert('Đơn hàng đã được gửi');
      }
    })

  }

  get products(){
    return this.submitForm.get('products');
  }

  get userName() {
    return this.submitForm.get('userName');
  }

  get phoneNumber() {
    return this.submitForm.get('phoneNumber');
  }

  get address() {
    return this.submitForm.get('address');
  }
}
