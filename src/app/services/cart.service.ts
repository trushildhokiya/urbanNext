import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList:any = []

  constructor(private toastService:ToastrService) {

   }

  addToCart: Function = (product:any)=>{
    this.toastService.success('Item added to cart')
    this.cartList.push(product)
  }

  getCount: Function = ()=>{
    return this.cartList.length
  }

  debugger: Function = (event:any)=>{
    console.log(event);
    
  }

  getCartData: Function = ()=>{
    return this.cartList
  }

  updateCart: Function = (updatedList:any)=>{
    this.cartList = updatedList
  }

}
