import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],

})
export class BlogsComponent implements OnInit {


  ngOnInit(): void {

  }

}
