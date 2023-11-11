import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-last-submissions-table',
  templateUrl: './last-submissions-table.component.html',
  styleUrls: ['./last-submissions-table.component.css']
})
export class LastSubmissionsTableComponent implements OnInit {

  @Input() forms: any[];

  public recentSubmissionsDataSource = new MatTableDataSource<any>([]);

  public displayedColumns: string[] = ['fullName', 'gender', 'motorType', 'favoriteColor', 'requiredSeats'];

  ngOnInit() {
    this.setRecentSubmissions(this.forms);
  }

  setRecentSubmissions(data: any[]) {
    const sortedData = data.sort((a, b) => b.timestamp - a.timestamp);
    const recentData = sortedData.slice(0, 10);
    this.recentSubmissionsDataSource.data = recentData;
  }

}
