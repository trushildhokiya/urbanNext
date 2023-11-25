import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule} from '@angular/material/badge'
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatBadgeModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  menuOpen: boolean = false

  count:number  = 0

  toogleMenu: Function = ()=>{
    this.menuOpen = !this.menuOpen
  }

  constructor(public cartService:CartService){

    this.count = cartService.getCount()
  }
  
}
