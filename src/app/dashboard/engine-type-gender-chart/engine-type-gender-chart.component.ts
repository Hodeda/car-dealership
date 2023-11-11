import { AfterViewInit, Component, Input } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-engine-type-gender-chart',
  templateUrl: './engine-type-gender-chart.component.html',
  styleUrls: ['./engine-type-gender-chart.component.css']
})
export class EngineTypeGenderChartComponent implements AfterViewInit {
  @Input() data: any;
  @Input() forms: any[];

    

  ngAfterViewInit() {
    if(this.forms.length > 0) {
      const chartContainer = document.getElementById("chartContainerAgeDistribution");
      if(chartContainer) {
    const chartData = this.prepareChartData(this.data);
    let chart = new CanvasJS.Chart("chartContainerEngineTypeGender", {
      animationEnabled: true,
      title: {
        text: "Most Picked Engine Type by Gender"
      },
      axisY: {
        title: "Count"
      },
      toolTip: {
        shared: true,
        reversed: true
      },
      data: chartData
    });
      chart.render();
  }
  }
  }

  prepareChartData(data: any): any[] {
    let maleData = [];
    let femaleData = [];

    for (let engineType in data) {
      maleData.push({ label: engineType, y: data[engineType].male });
      femaleData.push({ label: engineType, y: data[engineType].female });
    }

    return [{
      type: "stackedColumn",
      name: "Male",
      showInLegend: true,
      dataPoints: maleData
    }, {
      type: "stackedColumn",
      name: "Female",
      showInLegend: true,
      dataPoints: femaleData
    }];
  }
}
