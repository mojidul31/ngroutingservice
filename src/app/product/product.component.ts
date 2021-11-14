import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  total=0;
  totalQuantity=0;
  private value: any=[];   
  products: any = [];
  public productData: any = {};
  public apiMessage: String='';
  public showMessage: boolean = false;

  name = new FormControl('', [
    Validators.required
  ]);

  quantity = new FormControl('',[
    Validators.required
  ]);

  price = new FormControl('',[
    Validators.required
  ]);

  productForm: FormGroup = this.builder.group({
    name: this.name,
    quantity: this.quantity,
    price: this.price
  });

  constructor(private builder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void{    
      this.productService.getProducts().subscribe((item)=>{
      //console.log(item);
      this.products = item.data;
      this.findsum(item.data); 
    },
    (error)=>{
      alert('Error Found');
    });
  }

  saveProduct(): void{
    this.productData = this.productForm.value;
    this.productService.saveProduct(this.productData).subscribe((item)=>{      
      //alert('Service Ok');
      //console.log(item);
      this.apiMessage = item.message;
      this.products = item.data;
      this.findsum(item.data); 
    },
    (error)=>{
      alert('Error Found');
    });
    this.showMessage = true;
    this.reset();
    //this.refresh();    
  }

  reset(): void{
    this.productData = {};
  }

  findsum(data:any){
    console.log(data);
    this.value=data;
    this.total = 0;
    this.totalQuantity = 0; 
    for(let j=0;j<data.length;j++){   
         this.total += this.value[j].price;
         this.totalQuantity += this.value[j].quantity;
    }  
  } 
  
}
