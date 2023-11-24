import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, CardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

@Injectable({providedIn:'root'})
export class CategoriesComponent {

  category = new FormControl(`Men's Clothing`);

  categoryList: string[] = [`Men's Clothing`, `Women's Clothing`, 'Jewelery', 'Electronics'];

  dataArray: any = []

  constructor(private http:HttpClient){
    
    http.get(`https://fakestoreapi.com/products/category/${this.category.value?.toLowerCase()}`).subscribe(data=>{
      this.dataArray = data
    })
  }

  handleChange: Function = ()=>{

    this.http.get(`https://fakestoreapi.com/products/category/${this.category.value?.toLowerCase()}`).subscribe(data=>{
      this.dataArray = data
    })
    
  }

}
