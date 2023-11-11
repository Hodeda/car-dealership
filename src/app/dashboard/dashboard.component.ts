import { Component, OnDestroy, OnInit  } from '@angular/core';
import { FormService } from '../services/car-form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public forms: FormData[];
  public engineTypeByGenderData: any = {};
  private subscription: Subscription;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.subscription = this.formService.getCurrentData().subscribe(data => {
      if (data) {
        this.forms = data;
        this.processData(this.forms);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); 
    }
  }

  processData(data: any[]) {
    data.forEach(form => {
      const gender = form.gender;
      const engineType = form.motorType;
      if (!this.engineTypeByGenderData[engineType]) {
        this.engineTypeByGenderData[engineType] = { male: 0, female: 0 };
      }
      if (gender === 'male') {
        this.engineTypeByGenderData[engineType].male += 1;
      } else if (gender === 'female') {
        this.engineTypeByGenderData[engineType].female += 1;
      }
    });
  }

}
