import {Pipe} from 'angular2/angular2';

@Pipe({
  name: 'toUSD'
})
export class CurrencyConverterPipe {
  
  exchangeRate: number = 4.03209548;
  
  transform(value: number): number {
    return value * this.exchangeRate;
  }
  
}