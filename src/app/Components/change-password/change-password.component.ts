import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public err: string = "";
  public changePasswordForm!: FormGroup;

  private userId: number = 1; // ID của người dùng, có thể lấy từ dữ liệu đăng nhập

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      old_password: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirm_password: ['', Validators.required]
    });
  }

  changePassword() {
    const oldPassword = this.changePasswordForm.value.old_password;
    const newPassword = this.changePasswordForm.value.new_password;
    const confirmPassword = this.changePasswordForm.value.confirm_password;

    if (newPassword !== confirmPassword) {
      this.err = "Xác nhận mật khẩu mới không đúng";
    } else {
      this.apiService.changePassword(this.userId, newPassword)
        .subscribe(
          (response: any) => {
            this.err = "";
            alert("Đổi mật khẩu thành công!");
            // Cập nhật thông tin mật khẩu mới trong đối tượng người dùng nếu cần
          },
          (error: any) => {
            this.err = "Có lỗi xảy ra khi đổi mật khẩu";
          }
        );
    }
  }
}
