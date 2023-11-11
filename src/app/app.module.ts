import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarBrandsComponent } from './homepage/car-brands/car-brands.component';
import { CarCardComponent } from './homepage/car-brands/car-card/car-card.component';
import { FindCarFormComponent } from './homepage/find-car-form/find-car-form.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ColorPickerModule } from 'ngx-color-picker';
import { SiteInfoComponent } from './dashboard/site-info/site-info.component';
import { VisitorsHobbyPieComponent } from './dashboard/visitors-hobby-pie/visitors-hobby-pie.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { EngineTypeGenderChartComponent } from './dashboard/engine-type-gender-chart/engine-type-gender-chart.component';
import { LastSubmissionsTableComponent } from './dashboard/last-submissions-table/last-submissions-table.component';
import { MatTableModule } from '@angular/material/table';
import { NoDataCardComponent } from './shared/no-data-card/no-data-card.component';
import { AgeDistributionGraphComponent } from './dashboard/age-distribution-graph/age-distribution-graph.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DashboardComponent,
    CarBrandsComponent,
    CarCardComponent,
    FindCarFormComponent,
    FooterComponent,
    SiteInfoComponent,
    VisitorsHobbyPieComponent,
    EngineTypeGenderChartComponent,
    LastSubmissionsTableComponent,
    NoDataCardComponent,
    AgeDistributionGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ColorPickerModule,
    CanvasJSAngularChartsModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
