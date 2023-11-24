import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList:any = []

  constructor() { }

  addToCart: Function = (product:any)=>{
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
