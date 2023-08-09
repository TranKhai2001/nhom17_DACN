import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:Array<any> = [];
  top:Array<any> = [];
  blogs:Array<any> = [];
  constructor(private router:Router,private http:HttpClient,private apiService:ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (resp) => {
        this.data = resp;
        // this.top = resp;
      });
    this.apiService.getBlogs().subscribe(
      (resp) => {
        this.blogs = resp;
        // this.top = resp;
      });
    this.topProduct();

  }

  topProduct(){
    this.data = this.data.sort((a, b) => a.rate - b.rate)
  }


  addtocart(item: any){
    this.cartService.addtoCart(item);
  }



}
