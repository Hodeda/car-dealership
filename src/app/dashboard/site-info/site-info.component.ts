import { Component } from '@angular/core';
import { FormService } from 'src/app/services/car-form.service';
import { SiteAnalyticsService } from 'src/app/services/site-analytics.service';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.css']
})
export class SiteInfoComponent {

  public totalVisits: number;
  public totalForms: number;
  public formCompletionRate: number;

  constructor(private siteAnalytics: SiteAnalyticsService, private formService: FormService) {
    this.totalVisits = this.siteAnalytics.getVisitCount();
    this.totalForms = this.formService.countCarFormDataKeys();
    this.formCompletionRate = this.calculateFormCompletionRate();
  }

  private calculateFormCompletionRate(): number {
    if (this.totalVisits === 0) {
      return 0;
    }
    return (this.totalForms / this.totalVisits) * 100;
  }
}
