import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "./product";
import {CartService} from "../../service/cart.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public cartItems : any =[];
  constructor(private formBuilder:FormBuilder,private apiService:ApiService,private router:Router) { }
  public err: string = "";
  public loginForm!:FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })

  }

  login(){
    this.apiService.getCustomers().subscribe(
      (res) => {
        const user = res.find((a: any)=>{
          return (a.user_email === this.loginForm.value.email || a.user_name === this.loginForm.value.email ) &&
            a.user_password === this.loginForm.value.password
        })
        // localStorage.setItem("cart",JSON.stringify(this.cartItems));
        localStorage.setItem('user',JSON.stringify(user));
        if(user){


          if(user.role == "") {

            this.router.navigate(["products"]);
          }
            // else if(user.role == "admin") {
            //   alert("Login Successful!!!");
            //   this.router.navigate(["adminHome"]);
            // }
            // else if(user.role == "vendor") {
            //   alert("Login Successful!!!");
            //   this.router.navigate(["home"]); // dòng này dùnd de chuyen trang
          // }
          else{
            this.err = "Thông tin đăng nhập sai";
          }
          this.loginForm.reset();

        }
        else{
          this.err = "Nhập sai tài khoản hoặc mật khẩu";

        }

      },err=>{
        this.err = "Đã xảy ra lỗi !!!";

      }
    )
  }

}
