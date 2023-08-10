import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {BehaviorSubject, Observable} from "rxjs";
import  {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/users';

  getProductByName(title: any) {
    return this.http.get<Product>("http://localhost:3000/products/"+title);
  }
  addNewVendor(vendor: any) {
    return this.http.post("http://localhost:3000/users",vendor);
  }

  getBlogs() {
    return this.http.get<any>("http://localhost:3000/blogs");
  }

  getBlogById(id:any) {
    return this.http.get<any>("http://localhost:3000/blogs/"+id);
  }


  constructor(private http:HttpClient) { }

  postCustomer(data:any) {
    return this.http.post("http://localhost:3000/users",data);
  }
  getCustomers() {
    return this.http.get<any>("http://localhost:3000/users");
  }

  addNewProduct(product: any) {
    return this.http.post("http://localhost:3000/products",product);
  }
  getProducts(search_key:any=null): Observable<Array<Product>>{
    let url='http://localhost:3000/products'
    if (search_key != null) {
      url += '?name_like=' + search_key;
    }
    return this.http.get<Array<Product>>(url);
  }

  getProductsAscendingPrice(){
    return this.http.get<any>("http://localhost:3000/products?_sort=price&_order=asc");
  }
  getProductsDescendingPrice(){
    return this.http.get<any>("http://localhost:3000/products?_sort=price&_order=desc");
  }
  searchProductByName(keyword:string){
    return this.http.get<any>("http://localhost:3000/products?q="+keyword);
  }
  getProductById(id:any) {
    return this.http.get<any>(" http://localhost:3000/products?id="+id);
  }
  getCommentByIdProduct(id:number) {
    return this.http.get<any>(" http://localhost:3000/comments?productID="+id);
  }
  postProduct(data:any){
    return this.http.post("http://localhost:3000/products",data);
  }

  placeOrder(product:any){
    return this.http.post("http://localhost:3000/cart",product);
  }
  viewOrdersofUser(){
    return this.http.get<any>("http://localhost:3000/cart");
  }

  getVendors(){
    return this.http.get<any>("http://localhost:3000/users?role=vendor");
  }
  deleteProduct(id:number){

    return this.http.delete("http://localhost:3000/products/" + id);
  }
  deleteVendor(id:number){
    return this.http.delete("http://localhost:3000/users/"+id);
  }
  updateProduct(id:number,data:any){
    return this.http.put("http://localhost:3000/products/"+id,data)
  }
  updateVendor(id:number,data:any){
    return this.http.put("http://localhost:3000/users/"+id,data)
  }
  getComment():Observable<Comment>{
    return this.http.get<Comment>("http://localhost:3000/comments/");
  }
  creatComment(text:string,parentID:string,idus:number,name:string):Observable<Comment>{
    return this.http.post<Comment>("http://localhost:3000/comments/",{
      body:text,
      parentID,
      date: new Date().toString(),
      userID: idus,
      userName: name,
      productID:1,
    });
  }

  changePassword(userId: number, newPassword: string): Observable<any> {
    const user = {
      user_password: newPassword
    };

    return this.http.put(`${this.apiUrl}/users/${userId}`, user);
  }

  updateUserInfo(id: number, data: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }


}
