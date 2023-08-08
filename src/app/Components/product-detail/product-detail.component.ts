import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute,private router:Router,private http:HttpClient,private apiService:ApiService, private cartService : CartService) { }
  data:Array<any> = [];
  products:any;
  comment:any
  ngOnInit(): void {
    let id:any;
    this.activatedRoute.params.subscribe(params => {
      id = params.productID;
      console.log("id là: " + id);
      this.apiService.getProductById(id).subscribe(
        res => {
          this.data = res;
          this.data = this.data.filter((data: any) => data.id == id);
          // if (this.data.length <= 0) {
          //   this.router.navigateByUrl('/')
          // }
          this.products = this.data[0];
        }, (error: any) => {
          console.log(error);
        });
    });

    this.apiService.getComment().subscribe(comment=>{
      this.comment=comment;
    })
  }

  addComment({text,parentID}: {text: string; parentID: null}) :void{
    // var curr = localStorage.getItem('user');
    const user = localStorage.getItem('user');
    const obj = JSON.parse(user+"");
    // @ts-ignore
    this.apiService.creatComment(text,parentID,obj.id,obj.user_name).subscribe(createdComment=>{
      this.comment =[this.comment,createdComment]
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}





