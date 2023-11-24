import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {

  orderTotal: number = 0

  cartItems: any = []

  constructor(public cartService: CartService) {
    this.cartItems = cartService.getCartData()
    this.orderTotalUpdater()
  }

  removeItem: Function = (item: any) => {
    this.cartItems = this.cartItems.filter((products: any) => products.id !== item.id)
    this.cartService.updateCart(this.cartItems)
    this.orderTotalUpdater()
  }

  orderTotalUpdater: Function = () => {
    this.orderTotal = 0
    for (const product of this.cartItems) {
      this.orderTotal = this.orderTotal + Number(product.price)
    }
  }
}
