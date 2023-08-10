import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CartService} from "../../service/cart.service";

import {ApiService} from "../../service/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../login/product";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public user: any;



  constructor(private activatedRoute: ActivatedRoute,private router:Router,private http:HttpClient,private apiService:ApiService,private cartService : CartService) { }


  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })


  }

  getUserCurrent(){
    var curr = localStorage.getItem('user');
    const text = localStorage.getItem('user');
    const obj = JSON.parse(text+"");
    return obj.name;

  }


  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(["login"]);
    // this.cartService.removeAllCart();
  }

  loggined() {
    return localStorage.getItem('user');
  }


  totalproductIncart(){
    return this.cartService.calcTotal();
  }

}
