import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  constructor(private router:Router,private http:HttpClient,private apiService:ApiService,private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
      })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  getTotalPriceEeachProduct(product: any){
    return product.rate * product.num;
  }

  getFeeShip(){
    return this.cartService.feeShip();
  }

  getTotalMoneyCart(){
    return this.cartService.getTotalPrice();
  }

  getTotalFinalFee(){
    return this.cartService.getTotalPrice() + this.getFeeShip();
  }

  // removeProduct(product) {
  //   this.productRemoved.emit(product)
  // }


  modelChanged(product: any) {
    if (product.num === 0) {
      this.cartService.removeCartItem(product)
    }

  }
}
