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

  data:Array<any> = [];
  totalBlogs:number=0;
  page1:number=1;
  page2:number=1;
  constructor(private router:Router,private http:HttpClient,private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getBlogs().subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalBlogs = this.data.length;
      }

    );
  }

}
