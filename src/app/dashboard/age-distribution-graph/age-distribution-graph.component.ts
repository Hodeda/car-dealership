import { Component, Input, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-age-distribution-graph',
  templateUrl: './age-distribution-graph.component.html',
  styleUrls: ['./age-distribution-graph.component.css']
})
export class AgeDistributionGraphComponent implements OnInit {

  @Input() forms: any[];

  public ageGroups = {
    '18-25': 0,
    '26-35': 0,
    '36-50': 0,
    '51-65': 0,
    '65+': 0,
  };

  ngOnInit() {
    if(this.forms.length > 0) {
      this.calculateAgeGroups();
      this.createChart(this.ageGroups);
    }
  }

  createChart(ageGroups) {

    let chart = new CanvasJS.Chart("chartContainerAgeDistribution", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Age Distribution of Visitors"
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: "18-25", y: ageGroups['18-25'] },
          { label: "26-35", y: ageGroups['26-35'] },
          { label: "36-50", y: ageGroups['36-50'] },
          { label: "51-65", y: ageGroups['51-65'] },
          { label: "65+", y: ageGroups['65+'] }
        ]
      }]
    });
  
    chart.render();
  }

  calculateAgeGroups() {
    this.forms.forEach(form => {
      const today = new Date();
      const birthDate = new Date(form.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age >= 18 && age <= 25) {
        this.ageGroups['18-25'] += 1;
      } else if (age >= 26 && age <= 35) {
        this.ageGroups['26-35'] += 1;
      } else if (age >= 36 && age <= 50) {
        this.ageGroups['36-50'] += 1;
      } else if (age >= 51 && age <= 65) {
        this.ageGroups['51-65'] += 1;
      } else if (age >= 65) {
        this.ageGroups['65+'] += 1;
      }

    })

  }




}
