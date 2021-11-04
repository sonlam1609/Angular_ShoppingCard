import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  addProductForm!:FormGroup;

  constructor(private fb:FormBuilder,private productService: ProductService) {
    this.addProductForm=this.fb.group({
      productName:['đồng hồ siêu nhân'],
      quantity: [20],
      price: [25000],
      promotionPrice: [10],
      image: ['https://cf.shopee.vn/file/965c7a24b3822d80da6a6cfa6e48be44']
    });
  }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.addProductForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
