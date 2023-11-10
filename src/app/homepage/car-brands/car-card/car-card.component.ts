import { Component, Input } from '@angular/core';
import { CarBrand } from 'src/app/models/car-brand.model';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {

  @Input() carBrand: CarBrand;

}
