import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { product } from './product';

@Injectable()
export class ProductService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    const option = {
      headers: new HttpHeaders({}),
      observe: 'response' as const,
    };
    return this.httpClient.get<product[]>(this.apiUrl, option);
  }

  addProduct(product: product) {
    const option = {
      headers: new HttpHeaders({}),
      observe: 'response' as const,
    };
    return this.httpClient.post<product>(this.apiUrl, product, option);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.apiUrl + id, { observe: 'body' });
  }

  updateProduct(product: product) {
    const option = {
      headers: new HttpHeaders({
        //request header.
        'Content-Type': 'application/json',
      }),
      observe: 'response' as const,
    };

    return this.httpClient.put(this.apiUrl, product, option);
  }

  getProduct(id: string) {
    return this.httpClient.get<product>(this.apiUrl + id);
  }
}
