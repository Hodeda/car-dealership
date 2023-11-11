import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineTypeGenderChartComponent } from './engine-type-gender-chart.component';

describe('EngineTypeGenderChartComponent', () => {
  let component: EngineTypeGenderChartComponent;
  let fixture: ComponentFixture<EngineTypeGenderChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineTypeGenderChartComponent]
    });
    fixture = TestBed.createComponent(EngineTypeGenderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
