import { Component } from '@angular/core';
import { SiteAnalyticsService } from './services/site-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private siteAnalytics: SiteAnalyticsService) {
   }
}
