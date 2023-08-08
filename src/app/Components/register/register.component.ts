import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from "../../service/api.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public err: string = "";
  public registerForm!: FormGroup;
  private registeredAccounts: any[] = [];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      phone: ['', Validators.required],
      sex: ['', Validators.required],
      user_birth: ['', Validators.required],
      user_password1: ['', Validators.required],
      user_address: ['20A, Cư xá A, DH Nông Lâm, TP Thủ Đức', Validators.required],
      role: ['']
    });
  }

  register() {
    if (this.registerForm.value.user_password != this.registerForm.value.user_password1) {
      this.err = "Nhập lại sai";
    } else if (this.registerForm.invalid) {
      this.err = "Vui lòng điền đầy đủ thông tin đăng ký";
    } else {
      const username = this.registerForm.value.user_name;
      const email = this.registerForm.value.user_email;
      if (this.isDuplicateAccount(username, email)) {
        this.err = "Tài khoản hoặc email đã tồn tại";
      } else {
        this.err = "";
        this.apiService.postCustomer(this.registerForm.value).subscribe(
          res => {
            this.registerForm.reset();
            this.router.navigate(['login']);
          },
          err => {
            alert("Something went wrong!!!");
          }
        );
      }
    }
  }

  private isDuplicateAccount(username: string, email: string): boolean {
    return this.registeredAccounts.some(users =>
      users.user_name === username || users.user_email === email
    );
  }
}
