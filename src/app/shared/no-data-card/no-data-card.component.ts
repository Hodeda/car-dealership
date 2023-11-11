import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-card',
  templateUrl: './no-data-card.component.html',
  styleUrls: ['./no-data-card.component.css']
})
export class NoDataCardComponent {

  @Input() header: string;
  @Input() message: string;

}
