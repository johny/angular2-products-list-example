import {Component} from 'angular2/angular2';
import {ProductInterface} from '../productInterface.ts';

import {CurrencyConverterPipe} from '../pipes/currencyConverter.ts';

@Component({
  selector: 'd-product',
  inputs: ['product'],
  pipes: [CurrencyConverterPipe],
  template: `
    <div class="product panel panel-default">
      <div class="panel-heading">{{ product.name }} - <strong>{{ product.price | currency:'PLN' }}</strong> ({{ product.price | toUSD | currency:'USD' }})</div>
        <div class="product-image">
          <img src="{{ product.picture }}" alt="{{ product.name }}">
        </div>
        <div class="panel-body">
          <p>{{ product.description }}</p>
        </div>
      </div>
    <div>
  `
})
export class ProductComponent {
  
  product: ProductInterface;
  
}