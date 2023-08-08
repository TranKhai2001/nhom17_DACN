import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../service/api.service";

import {CartService} from "../../service/cart.service";

import {FormControl, FormGroup} from "@angular/forms";
// @ts-ignore
import { Product } from "../models/product";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data:Array<any> = [];
  page1: number=1;
  totalProducts: number=0;
  cart:Array<any> = [];

  searchForm: FormGroup=new FormGroup({
    name: new FormControl(),
  });

  constructor(private router:Router,private http:HttpClient,private apiService:ApiService, private cartService : CartService) { }


  ngOnInit(): void {
    this.apiService.getProducts(this.searchForm.value.name).subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalProducts = this.data.length;
        console.log(this.searchForm.value.name)
      });
    this.apiService.getProducts(this.searchForm.value.name).subscribe(
      (res)=>{
        this.cart = res;
        this.data =res;

      })
  }
  filter(category:string){
    this.cart = this.data
      .filter((a:any)=>{
        if(a.type == category || category==''){
          return a;
        }
      })
  }
  filterByTrademark(category:string){
    this.cart = this.data
      .filter((a:any)=>{
        if(a.trademark == category || category==''){
          return a;
        }
      })
  }

  filterByRate(category: number, category1: number){
    this.cart = this.data
      .filter((a:any)=>{
        if(a.rate > category  && a.rate < category1 ){
          return a;
        }
      })
  }



  addtocart(item: any){
    this.cartService.addtoCart(item);
  }




}
