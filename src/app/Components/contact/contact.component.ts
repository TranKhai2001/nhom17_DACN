import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  reload() {
    window.location.reload();
    alert("Đánh giá của bạn đã được ghi lại");
  }
}
