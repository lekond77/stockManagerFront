import { Component, OnInit } from '@angular/core';
import ProductMockService from './product.mock.service';
import { Product } from '../model/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products!: Product[];
  productForm!: FormGroup;
  constructor(private productService: ProductMockService, private formBulder: FormBuilder){
   
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productForm = this.formBulder.group({
      reference: new FormControl('', Validators.required),
      quantity: [''],
      unitPrice: ['']
    }); 
  }
}
