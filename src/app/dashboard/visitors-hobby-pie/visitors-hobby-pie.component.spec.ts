import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsHobbyPieComponent } from './visitors-hobby-pie.component';

describe('VisitorsHobbyPieComponent', () => {
  let component: VisitorsHobbyPieComponent;
  let fixture: ComponentFixture<VisitorsHobbyPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorsHobbyPieComponent]
    });
    fixture = TestBed.createComponent(VisitorsHobbyPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
