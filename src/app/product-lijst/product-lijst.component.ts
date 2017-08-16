import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-lijst',
  templateUrl: './product-lijst.component.html',
  styleUrls: ['./product-lijst.component.css']
})
export class ProductLijstComponent implements OnInit {

  producten: Product[] = [new Product(1, 'Verf', 'Liter', 19.99)];

  constructor() { }

  ngOnInit() {
  }

  voegProductToe(naam: HTMLInputElement, eenheid: HTMLInputElement, prijs: HTMLInputElement) {
    const lastProduct = this.producten[this.producten.length - 1];
    const index = lastProduct.id + 1;
    const newProduct = new Product(index, naam.value, eenheid.value, prijs.valueAsNumber);
    this.producten.push(newProduct);
  }

  verwijderProduct(product: Product) {
    const index = this.producten.indexOf(product);
    this.producten.splice(index, 1);
  }
}
