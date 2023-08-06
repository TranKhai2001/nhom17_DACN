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

  ngOnInit(): void {

  }

}
