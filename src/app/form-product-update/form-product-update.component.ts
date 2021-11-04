import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-form-product-update',
  templateUrl: './form-product-update.component.html',
  styleUrls: ['./form-product-update.component.css'],
})
export class FormProductUpdateComponent implements OnInit {
  updateProductForm: FormGroup;

  productId: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.updateProductForm = this.fb.group({
      id: [''],
      productName: [''],
      quantity: [''],
      price: [''],
      promotionPrice: [''],
      image: [''],
    });
    this.productId = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    this.getProduct();
  }

  updateProduct() {
    this.productService
      .updateProduct(this.updateProductForm.value)
      .subscribe((res) => {
        if (res.status == 200) {
          alert('update ok');
          // this.router.navigateByUrl('/product-list');
        }
      });
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe((res) => {
      this.updateProductForm.controls['id'].setValue(res.id);
      this.updateProductForm.controls['productName'].setValue(res.productName);
      this.updateProductForm.controls['quantity'].setValue(res.quantity);
      this.updateProductForm.controls['price'].setValue(res.price);
      this.updateProductForm.controls['promotionPrice'].setValue(
        res.promotionPrice
      );
      this.updateProductForm.controls['image'].setValue(res.image);
    });
  }
}
