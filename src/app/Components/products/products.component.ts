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





  ngOnInit(): void {

  }




}
