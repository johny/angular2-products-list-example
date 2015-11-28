import {ProductInterface} from './productInterface.ts';

export class Product implements ProductInterface {
  
  name: string;
  price: number;
  description: string;
  picture: string;
  
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  
  setDescription(desc: string) {
    this.description = desc;
  }
  
  setPicture(pictureUrl: string){
    this.picture = pictureUrl;
  }
  
};