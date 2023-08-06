import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CartComponent } from './components/cart/cart.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WatchesComponent } from './components/watches/watches.component';
import { WatchDetailComponent } from './components/watch-detail/watch-detail.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import {BlogComponent} from "./components/blog/blog.component";
import {ProductsComponent} from "./Components/products/products.component";
import {ProductDetailComponent} from "./Components/product-detail/product-detail.component";
import {PayComponent} from "./Components/pay/pay.component";
import {OrderConfirmedComponent} from "./Components/order-confirmed/order-confirmed.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:blogID', component: BlogComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'watches', component: WatchesComponent },
  { path: 'watch-detail', component: WatchDetailComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail/:productID', component: ProductDetailComponent },
  { path: 'pay', component: PayComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'order-confirmed', component: OrderConfirmedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
