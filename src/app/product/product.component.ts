import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products$!: Observable<Product[]>;
  productForm!: FormGroup;
  constructor(private productService: ProductService, private formBulder: FormBuilder){
   
  }
  ngOnInit(): void {

    this.products$ = this.productService.getProducts();

    this.productForm = this.formBulder.group({
      reference: new FormControl('', Validators.required),
      quantity: [''],
      unitPrice: ['']
    }); 
  }
}
