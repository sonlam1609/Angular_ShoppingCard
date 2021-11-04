export interface product{
  id:string;
  productName:string;
  quantity:number;
  price:number;
  promotionPrice:number;
  image:string
}

export interface CartItems{
  product: product;
  quantity: number;
}
