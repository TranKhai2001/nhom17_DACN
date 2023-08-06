import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CartService} from "../../service/cart.service";

import {ApiService} from "../../service/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  ngOnInit(): void {



  }



}
