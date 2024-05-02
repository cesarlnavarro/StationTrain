import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursTrainComponent } from './hours-train.component';

describe('HoursTrainComponent', () => {
  let component: HoursTrainComponent;
  let fixture: ComponentFixture<HoursTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoursTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoursTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
