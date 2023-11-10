import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCarFormComponent } from './find-car-form.component';

describe('FindCarFormComponent', () => {
  let component: FindCarFormComponent;
  let fixture: ComponentFixture<FindCarFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindCarFormComponent]
    });
    fixture = TestBed.createComponent(FindCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
