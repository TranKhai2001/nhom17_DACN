import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems : any =[];

  public cartItemList : any =[];
  public order = new BehaviorSubject<any>([]);
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() {
      // alert("con")
      // localStorage.setItem("cart",JSON.stringify(this.cartItemList));
      // this.cartItemList = JSON.parse(localStorage.getItem("cart")+"");
  }
  getProducts(){
    return this.productList.asObservable();
  }

  getOrder(){
    return this.order.asObservable();
  }

  getcart(){
    return this.cartItemList;
  }


  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.order.next(product);
  }
  addtoCart(product : any){
    const productExistInCart = this.cartItemList.find((p: any) => p.id === product.id);
    if(!productExistInCart){
      this.cartItemList.push({...product, num:1});
      this.productList.next(this.cartItemList);
      this.order.next(this.cartItemList);
      this.getTotalPrice();
    }
    else {
      productExistInCart.num++;
    }

    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.rate * a.num;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    this.order.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  feeShip(){
    let grandTotal = 0;
    let numP = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.rate * a.num;
      numP += a.num;
    })
    if (grandTotal > 10000000){
      return 0;
    }
    return numP*18000;
  }

  getFinalMoney(){
    return this.getTotalPrice() + this.feeShip();
  }

  calcTotal() {
    return this.cartItemList.reduce((acc: any, prod: { num: any; }) => acc+= prod.num ,0)
  }
}
