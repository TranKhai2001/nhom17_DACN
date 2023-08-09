import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../service/api.service";
import {Comment} from "../../models/comment";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: Array<Comment>=[];
  page1: number=1;
  totalComment: number=0;
  // @ts-ignore
  form!:FormGroup
  @Input() initialText:string='';
  @Input() submitLabel:string='';
  @Input() currentUserId:string='';
  @Output() handleSubmit =new EventEmitter<string>();
  constructor( private activatedRoute: ActivatedRoute,private router:Router,private http:HttpClient,private apiService:ApiService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.apiService.getComment().subscribe(comments=>{
      // @ts-ignore
      this.comments=comments;
      this.totalComment=this.comments.length;
      console.log('comments',comments);
    })
    this.form=this.fb.group({
      title:new FormControl(this.initialText,Validators.required)
    })
  }
  onSubmit(){
    console.log(this.form.value);
    this.handleSubmit.emit(this.form.value.title)
  }

  refresh() {
    window.location.reload();
  }
}
