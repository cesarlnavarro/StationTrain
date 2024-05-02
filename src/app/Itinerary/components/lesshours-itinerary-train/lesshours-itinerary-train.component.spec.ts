import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesshoursItineraryTrainComponent } from './lesshours-itinerary-train.component';

describe('LesshoursItineraryTrainComponent', () => {
  let component: LesshoursItineraryTrainComponent;
  let fixture: ComponentFixture<LesshoursItineraryTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LesshoursItineraryTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LesshoursItineraryTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
