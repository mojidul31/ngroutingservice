import { Component, OnInit } from '@angular/core';

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
  constructor(private productService: ProductService) { }

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

  findsum(data:any){
    console.log(data);
    this.value=data;  
    for(let j=0;j<data.length;j++){   
         this.total += this.value[j].price;
         this.totalQuantity += this.value[j].quantity;
    }  
  }  

}
