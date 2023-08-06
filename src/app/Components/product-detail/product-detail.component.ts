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

  ngOnInit(): void {

    }

  addComment({text,parentID}: {text: string; parentID: null}) :void{
  }

}





