import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  hoten: String="";
  sdt: String="";
  email: String="";
  gioitinh: String="";
  ngaysinh: String="";
  diachi: String="";

  constructor() { }

  ngOnInit(): void {
    this.infor()
  }

  infor(){
    var curr = localStorage.getItem('user');
    const text = localStorage.getItem('user');
    const obj = JSON.parse(text+"");
    this.hoten = obj.name;
    this.sdt = obj.phone;
    this.diachi = obj.user_address;
    this.gioitinh = obj.sex;
    this.email = obj.user_email;
    this.ngaysinh = obj.user_birth;

  }

}
