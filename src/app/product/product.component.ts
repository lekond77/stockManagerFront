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
  action:string = "add";
  actionText:string = "Ajouter";

  selectedProduct!:Product;
  constructor(private productService: ProductService, private formBulder: FormBuilder){
   
  }

  ngOnInit(): void {
    //
    this.initProduct();

    //Get all products
    this.getProducts();

    //product form
    this.createForm();
   
  }
  

  createForm(){
     //form to add new product
     this.productForm = this.formBulder.group({
      reference: new FormControl('', Validators.required),
      quantity: [''],
      unitPrice: ['']
    });  
  }

  onActionChange(action: 'edit'|'add' ){
    this.actionText = action === 'add'? 'Ajouter' : 'Modifier';
  }

  //Add new product
  addProduct(){
    const product = this.productForm.value;
    this.productService.addProduct(product);
    this.initProduct();
    //console.log(this.getProducts()); // Update products view
  }

  getProducts(){
    this.products$ = this.productService.getProducts();
  }

  updateProduct(){
    this.productService.updateProduct(this.selectedProduct);
  }

  initProduct(){
    this.selectedProduct = new Product();
    this.createForm();
  }
 
}
