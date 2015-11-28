import {Product} from '../models/product.ts';

export class ProductRepository {
  
  private products: Array<Product> = [];
  
  constructor() {
    
    const pic: string = 'https://xplatform.org/ext/lorempixel/240/110';
    
    let p1 = new Product('T-Shirt', 3.44);
    p1.setDescription('Lorem ipsum, product description');
    p1.setPicture(pic);
    
    this.products.push(p1);
    
    let p2 = new Product('Basketball', 9.99);
    p2.setDescription('This is great basketball!');
    p2.setPicture(pic);
    
    this.products.push(p2);
    
    let p3 = new Product('Shoes', 4.38);
    p3.setDescription('Lorem ipsum this are shoes!');
    p3.setPicture(pic);
    
    this.products.push(p3);
  }
  
  public getProducts(): Promise<Array<Product>> {
    
    return Promise.resolve(this.products);
    
  }
  
}