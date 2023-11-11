import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSubmissionsTableComponent } from './last-submissions-table.component';

describe('LastSubmissionsTableComponent', () => {
  let component: LastSubmissionsTableComponent;
  let fixture: ComponentFixture<LastSubmissionsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastSubmissionsTableComponent]
    });
    fixture = TestBed.createComponent(LastSubmissionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
