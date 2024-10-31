import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/model/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products$!: Observable<Product[]>;
  productPreview$!:Observable<Product>;
  productForm!: FormGroup;
  action:string = "add";
  actionText:string = "Ajouter";
  modalStyle:string = "d-none";

  selectedProduct!:Product;
  constructor(private productService: ProductService, private formBulder: FormBuilder,  private router: Router){
   
  }

  ngOnInit(): void {

    //Create new form with propreties values
     this.initProduct();

    //Get all products
    this.getProducts();

   
  }

    //form to add or update  product
  createForm(){
     this.productForm = this.formBulder.group({
      reference: new FormControl('', Validators.required),
      quantity: [''],
      unitPrice: ['']
    });  
  }

  onActionChange(action: 'edit'|'add' ): void{
    this.actionText = action === 'add'? 'Ajouter' : 'Modifier';
  }

  onProductChange(): void{
    this.actionText === 'Ajouter' ? this.onButtonAddProductClick() : this.onButtonUpdateProduct();
  }

  getProducts(): void{
    this.products$ = this.productService.getProducts();
  }
  onButtonAddProductClick(): void{
    this.productService.addProduct(this.productForm.value).pipe(
      tap((response) => {
        this.products$ = this.products$.pipe(
          map(products => [...products])
        );
        this.initProduct(); // Réinitialise le formulaire
      }),
      catchError((error) => {
        return of(null); 
      })
    ).subscribe();
  }

  onButtonUpdateProduct(): void{
    this.productService.updateProduct(this.selectedProduct).pipe(
      tap((response) =>{
        this.products$ = this.products$.pipe(
          map(products => [...products])
        );
        this.initProduct();
      }),
      catchError((error) =>{
        return of (null);
      })
    ).subscribe();
  }

  onButtonDeleteProduct(productId: number): void{
    this.productService.deleteProduct(productId).pipe(
      tap((response) =>{
        this.products$ = this.products$.pipe(
          map(products => [...products])
        )
      })
    ).subscribe();
  }


  getProduct(productId: number){
    this.productPreview$ = this.productService.getProduct(productId);
    this.modalStyle = "d-block";
  }

  initProduct(){
    this.selectedProduct = new Product();
    this.createForm();
  }

  onProductPreviewClose(){
    this.modalStyle = "d-none";
  }

}
