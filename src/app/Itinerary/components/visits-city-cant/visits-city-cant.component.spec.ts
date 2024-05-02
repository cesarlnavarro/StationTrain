import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsCityCantComponent } from './visits-city-cant.component';

describe('VisitsCityCantComponent', () => {
  let component: VisitsCityCantComponent;
  let fixture: ComponentFixture<VisitsCityCantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitsCityCantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitsCityCantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
