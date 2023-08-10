import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  hoten: String="";
  sdt: String="";
  thanhpho: String="";
  huyen: String="";
  xa: String="";
  diachi: String="";

  public products : any = [];
  constructor(private router:Router,private http:HttpClient,private apiService:ApiService,private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
      })
    this.infor()
  }

  infor(){
    var curr = localStorage.getItem('user');
    const text = localStorage.getItem('user');
    const obj = JSON.parse(text+"");
    if(curr){
      this.hoten = obj.name;
      this.sdt = obj.phone;
      let arr = obj.user_address.split(",");
      this.thanhpho = arr[0];
      this.huyen = arr[1];
      this.xa = arr[2];
      this.diachi = arr[3];

    }


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

  order(){
    localStorage.setItem("feeShip",JSON.stringify(this.cartService.feeShip()));
    localStorage.setItem("totalPrice",JSON.stringify(this.cartService.getTotalPrice()));
    localStorage.setItem("finalMoney",JSON.stringify(this.cartService.getFinalMoney()));
    this.cartService.removeAllCart();
    // this.router.navigate(["/"]);
  }



}
