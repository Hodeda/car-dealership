import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDistributionGraphComponent } from './age-distribution-graph.component';

describe('AgeDistributionGraphComponent', () => {
  let component: AgeDistributionGraphComponent;
  let fixture: ComponentFixture<AgeDistributionGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeDistributionGraphComponent]
    });
    fixture = TestBed.createComponent(AgeDistributionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
