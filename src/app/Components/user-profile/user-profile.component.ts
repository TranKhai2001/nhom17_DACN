import { Component, Inject, OnInit } from '@angular/core';

import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  hoten: string = "";
  sdt: string = "";
  email: string = "";
  gioitinh: string = "";
  ngaysinh: string = "";
  diachi: string = "";

  constructor(@Inject(ApiService) private apiService: ApiService) { }

  ngOnInit(): void {
    this.infor();
  }

  infor() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.hoten = user.name;
    this.sdt = user.phone;
    this.diachi = user.user_address;
    this.gioitinh = user.sex;
    this.email = user.user_email;
    this.ngaysinh = user.user_birth;
  }

  updateInfo() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    user.name = this.hoten;
    user.phone = this.sdt;
    user.user_address = this.diachi;
    user.sex = this.gioitinh;
    user.user_birth = this.ngaysinh;

    this.apiService.updateUserInfo(user.id, user).subscribe(
      (response) => {
        // Handle success
        localStorage.setItem('user', JSON.stringify(user));
        alert('Thông tin đã được cập nhật thành công');
      },
      (error) => {
        // Handle error
        alert('Có lỗi xảy ra khi cập nhật thông tin');
      }
    );
  }
}
