import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyexpenseschartComponent } from './monthlyexpenseschart.component';

describe('MonthlyexpenseschartComponent', () => {
  let component: MonthlyexpenseschartComponent;
  let fixture: ComponentFixture<MonthlyexpenseschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyexpenseschartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyexpenseschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
