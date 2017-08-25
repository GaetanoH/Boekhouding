import {Product} from '../models/product.model';

export class ProductenService {
  producten: Product[] = [new Product('Test', 'test', 22.9)];

  getProducten() {
    return this.producten;
  }

  addProduct(product: Product) {
    this.producten.push(product);
  }

  deleteProduct(product: Product) {
    const index = this.producten.indexOf(product);
    this.producten.splice(index, 1);
  }

  getProduct(id: number) {
    return this.producten[id];
  }
}
