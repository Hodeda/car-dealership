import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitors-hobby-pie',
  templateUrl: './visitors-hobby-pie.component.html',
  styleUrls: ['./visitors-hobby-pie.component.css']
})
export class VisitorsHobbyPieComponent implements OnInit {

  @Input() forms: any[];

  public readingCount: number = 0;
  public gamingCount: number = 0;
  public travelingCount: number = 0;
  public cookingCount: number = 0;
  public sportsCount: number = 0;

  chartOptions = {
    animationEnabled: true,
    title: {
    	text: "Most common hobby amongst visitors"
    },
    data: [{
      type: "pie",
      dataPoints: [
        { label: "Reading",  y: this.readingCount  },
        { label: "Gaming", y: this.gamingCount  },
        { label: "Traveling", y: this.travelingCount  },
        { label: "Cooking",  y: this.cookingCount  },
        { label: "Sports",  y: this.sportsCount  }
      ]
    }]                
  };

    ngOnInit() {
    this.calculateHobbyCount();
  }

  calculateHobbyCount() {
    this.forms.forEach(form => {
      if (form?.hobbies?.includes("Reading")) this.readingCount++;
      if (form?.hobbies?.includes("Gaming")) this.gamingCount++;
      if (form?.hobbies?.includes("Traveling")) this.travelingCount++;
      if (form?.hobbies?.includes("Cooking")) this.cookingCount++;
      if (form?.hobbies?.includes("Sports")) this.sportsCount++;
    });
    this.setUpChart();
  }


  setUpChart() {
    this.chartOptions.data[0].dataPoints = [
      { label: "Reading",  y: this.readingCount  },
      { label: "Gaming", y: this.gamingCount  },
      { label: "Traveling", y: this.travelingCount  },
      { label: "Cooking",  y: this.cookingCount  },
      { label: "Sports",  y: this.sportsCount  }
    ];
  }




}
