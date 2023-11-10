import { Component } from '@angular/core';
import { CarBrand } from 'src/app/models/car-brand.model';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.css']
})
export class CarBrandsComponent {

  public carBrands: CarBrand[] = [
    {brand:"Honda", logo:"https://cdn.iconscout.com/icon/free/png-256/honda-16-202798.png", location: "Tokyo, Japan"},
    {brand:"Audi", logo:"https://cdn.iconscout.com/icon/free/png-256/audi-6-282743.png", location: "Ingolstadt, Germany"},
    {brand:"BMW", logo:"https://cdn.iconscout.com/icon/free/png-256/bmw-5-202750.png", location: "Munich, Germany"},
    {brand:"Mazda", logo:"https://cdn.iconscout.com/icon/free/png-256/mazda-3-827488.png", location: "Hiroshima, Japan"},
    {brand:"Volkswagen", logo:"https://cdn.iconscout.com/icon/free/png-256/volkswagen-51-202922.png", location: "Wolfsburg, Germany"},
    {brand:"Hyundai", logo:"https://cdn.iconscout.com/icon/free/png-256/hyundai-5-202803.png", location: "Seoul, South Korea"},
    {brand:"Volvo", logo:"https://cdn.iconscout.com/icon/free/png-256/volvo-4-202923.png", location: "Gothenburg, Sweden"},
    {brand:"Jaguar", logo:"https://cdn.iconscout.com/icon/free/png-256/jaguar-3-202816.png", location: "Whitley, United Kingdom"},
    {brand:"Porsche", logo:"https://cdn.iconscout.com/icon/free/png-256/porsche-5-202881.png", location: "Stuttgart, Germany"},
];


}
