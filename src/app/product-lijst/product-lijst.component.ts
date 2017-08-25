import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import {ProductenService} from './producten.service';

@Component({
  selector: 'app-product-lijst',
  templateUrl: './product-lijst.component.html',
  styleUrls: ['./product-lijst.component.css']
})
export class ProductLijstComponent implements OnInit {


  producten: Product[];

  constructor(private productService: ProductenService) { }

  ngOnInit() {
    this.producten = this.productService.getProducten();
  }

  voegProductToe(naam: HTMLInputElement, eenheid: HTMLInputElement, prijs: HTMLInputElement) {
    this.productService
      .addProduct(new Product(naam.value, eenheid.value, +prijs.value))
  }

  verwijderProduct(product: Product) {
    this.productService.deleteProduct(product);
  }
}
