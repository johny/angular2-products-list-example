import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

import {ProductInterface} from './productInterface.ts';
import {Product} from './models/product.ts';
import {ProductComponent} from './components/product.ts';
import {ProductRepository} from './services/productRepository.ts';

enum Sorting {ASC, DESC};

@Component({
  selector: 'my-app',
  directives: [CORE_DIRECTIVES, ProductComponent],
  template: `
    <div class="page-header"><h2>Products list ({{products.length}})</h2></div>
    
    <div class="filters" style="margin-bottom: 12px;">
      <div class="btn-group" role="group" aria-label="Filters">
        <button type="button" class="btn btn-default" [ng-class]="sortingClass()" (click)="sortByPrice()">Sort by price</button>
        <button type="button" class="btn btn-default" (click)="sortByName()">Sort by name</button>
      </div>
    </div>
    
    <div class="row products">
      <div class="col col-xs-12 col-md-6">
        <d-product [product]="product" *ng-for="#product of products"></d-product>
      </div>
    </div>
  `
})

class AppComponent { 
  
  products: Array<Product> = [];
  sorting: Sorting;
  
  constructor(productRepository: ProductRepository) {
    
    productRepository.getProducts().then((data) => {
      this.products = data;
    });
  }
  
  sortByPrice() {
    
    if (typeof this.sorting === 'undefined' || this.sorting === Sorting.DESC) {
      this.sorting = Sorting.ASC;
    } else {
      this.sorting = Sorting.DESC;
    }
    
    this.products.sort((p1: ProductInterface, p2: ProductInterface) => {
      if (this.sorting === Sorting.ASC) {
        return p1.price - p2.price;
      } else {
        return p2.price - p1.price;
      }
    });
    
  }
  
  sortByName() {
    this.products.sort((p1: ProductInterface, p2: ProductInterface) => {
      return p1.name.localeCompare(p2.name);
    });
  }
  
  sortingClass() {
    if(this.sorting === Sorting.ASC) {
      return 'sorting-asc';
    } else if (this.sorting === Sorting.DESC) {
      return 'sorting-desc';
    } else {
      return '';
    }
  }
  
}

bootstrap(AppComponent, [ProductRepository]);