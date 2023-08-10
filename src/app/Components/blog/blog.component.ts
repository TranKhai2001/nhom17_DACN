import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blog:any;
  public title:string = "";
  public img:string="";
  public startDetail:string="";
  public endDetail:string="";
  public content="";
  public date="";
  public author="";
  public des="";
  constructor( private activatedRoute: ActivatedRoute,private router:Router,private http:HttpClient,private apiService:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.apiService.getBlogById(params.blogID).subscribe(
          (resp) => {
            this.blog = resp;
            console.log(this.blog);
            this.title = resp.title;
            this.img = resp.img;
            this.startDetail = resp.startDetail;
            this.endDetail = resp.endDetail;
            this.content = resp.content;
            this.date = resp.date;
            this.author = resp.author;
            this.des = resp.decription;
          }
        );
      }
    );
  }

}
