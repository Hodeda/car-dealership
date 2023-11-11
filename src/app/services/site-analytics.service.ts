import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SiteAnalyticsService {

    constructor() {
        this.trackVisit();
     }

    private trackVisit() {
        const visits = localStorage.getItem('visits') || 0;
        localStorage.setItem('visits', (Number(visits) + 1).toString());
    }

    public getVisitCount(): number {
        return Number(localStorage.getItem('visits'));
      }
}
