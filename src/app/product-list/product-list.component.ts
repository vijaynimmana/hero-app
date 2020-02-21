import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  share(){
    window.alert('this product has been shared succesfully!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  constructor() { }

  ngOnInit() {
  }

}
