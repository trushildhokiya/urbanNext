import { Component,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../../components/card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent,RouterModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


@Injectable({providedIn:'root'})

export class HomeComponent {

  jewelleryProducts: any = []
  mensClothing: any = []
  femaleClothing: any = []
  electronics: any = []

  
  constructor(private http:HttpClient){

    this.http.get('https://fakestoreapi.com/products/category/jewelery?limit=4').subscribe((data)=>{
      this.jewelleryProducts = data
    })

    this.http.get(`https://fakestoreapi.com/products/category/men's clothing?limit=4`).subscribe((data)=>{
      this.mensClothing = data
    })

    this.http.get('https://fakestoreapi.com/products/category/electronics?limit=4').subscribe((data)=>{
      this.electronics = data
    })

    this.http.get(`https://fakestoreapi.com/products/category/women's clothing?limit=4`).subscribe((data)=>{
      this.femaleClothing = data
    })

    
  }

}
